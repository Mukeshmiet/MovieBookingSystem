package com.movie.bookingmangement.bookingManagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.bookingmangement.bookingManagement.dto.BookingRequest;
import com.movie.bookingmangement.bookingManagement.entity.Booking;
import com.movie.bookingmangement.bookingManagement.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173/")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    
   

//    @PostMapping
//    public ResponseEntity<Booking> createBooking(@RequestParam Long userId, @RequestBody BookingRequest bookingRequest) {
//        try {
//            // Call the service method to create the booking
//            Booking newBooking = bookingService.addBooking(userId, bookingRequest);
//            return ResponseEntity.ok(newBooking);
//        } catch (Exception e) {
//            // Handle any exceptions and return a bad request response
//            return ResponseEntity.badRequest().build();
//        }
//    }
    
    @PostMapping
    public Booking createBooking(@RequestBody BookingRequest bookingRequest) {
        Long defaultUserId = 12L; // Use default user ID
        return bookingService.addBooking(defaultUserId, bookingRequest);
    }
    
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Booking updatedBooking = bookingService.updateBooking(id, bookingDetails);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }
}