package com.movie.userRegistration.userRegistration.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.userRegistration.userRegistration.entity.Booking;
import com.movie.userRegistration.userRegistration.entity.LoginRequest;
import com.movie.userRegistration.userRegistration.entity.User;
import com.movie.userRegistration.userRegistration.repo.BookingRepository;
import com.movie.userRegistration.userRegistration.repo.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;




@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Check if role is provided, otherwise default to "USER"
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        // Validate role
        if (!user.getRole().equals("USER") && !user.getRole().equals("ADMIN")) {
            return ResponseEntity.badRequest().body("Error: Invalid role specified!");
        }

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) throws AuthenticationException {
        // Authenticate the user
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()
            )
        );

        // Retrieve authenticated user details
        org.springframework.security.core.userdetails.User authenticatedUser =
            (org.springframework.security.core.userdetails.User) authentication.getPrincipal();

        // Send successful login response with user details
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful!");
        response.put("username", authenticatedUser.getUsername());
        response.put("roles", authenticatedUser.getAuthorities());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id, Principal principal) {
        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        User user = userOptional.get();

        // Allow the current user to fetch only their own details, or allow ADMINs to access any user details
        if (!user.getUsername().equals(principal.getName()) && !principal.getName().equals("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/{userId}/bookings")
    @PreAuthorize("hasRole('USER')")  // Only USER can add bookings
    public ResponseEntity<?> addBooking(@PathVariable Long userId, @RequestBody Booking booking) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        booking.setUser(user);
        bookingRepository.save(booking);

        return ResponseEntity.ok("Booking added successfully!");
    }

    @DeleteMapping("/{userId}")
    @PreAuthorize("hasRole('ADMIN')")  // Only ADMIN can delete users
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        if (!userRepository.existsById(userId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        userRepository.deleteById(userId);
        return ResponseEntity.ok("User deleted successfully!");
    }

    @PutMapping("/{userId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")  // Both USER and ADMIN can update user details
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody User updatedUser, Principal principal) {
        User existingUser = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        // Allow users to update only their own details, or allow ADMINs to update any user
        if (!existingUser.getUsername().equals(principal.getName()) && !principal.getName().equals("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        // Update user details
        existingUser.setUsername(updatedUser.getUsername() != null ? updatedUser.getUsername() : existingUser.getUsername());
        existingUser.setEmail(updatedUser.getEmail() != null ? updatedUser.getEmail() : existingUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        // Set role if it's being updated (ADMIN should be careful while updating roles)
        if (updatedUser.getRole() != null) {
            existingUser.setRole(updatedUser.getRole());
        }

        userRepository.save(existingUser);

        return ResponseEntity.ok("User updated successfully!");
    }

    @GetMapping("/check")
    public ResponseEntity<?> checkAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            return ResponseEntity.ok("Authenticated");
        }
        return ResponseEntity.status(401).body("Not authenticated");
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate(); // Invalidate session
        }
        return "You have successfully logged out.";
    }
}
