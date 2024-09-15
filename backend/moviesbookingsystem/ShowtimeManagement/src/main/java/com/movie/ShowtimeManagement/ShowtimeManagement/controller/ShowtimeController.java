package com.movie.ShowtimeManagement.ShowtimeManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.ShowtimeManagement.ShowtimeManagement.dto.ShowtimeRequest;
import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;
import com.movie.ShowtimeManagement.ShowtimeManagement.service.ShowtimeService;

@RestController
@RequestMapping("/showtimes")
@CrossOrigin(origins = "http://localhost:5173/")
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    // Create a new showtime
    @PostMapping
    public ResponseEntity<Showtime> createShowtime(@RequestBody ShowtimeRequest showtimeRequest) {
        Showtime createdShowtime = showtimeService.createShowtime(showtimeRequest);
        return ResponseEntity.ok(createdShowtime);
    }

    // Update an existing showtime
    @PutMapping("/{id}")
    public ResponseEntity<Showtime> updateShowtime(@PathVariable Long id, @RequestBody ShowtimeRequest showtimeRequest) {
        Showtime updatedShowtime = showtimeService.updateShowtime(id, showtimeRequest);
        return ResponseEntity.ok(updatedShowtime);
    }

    // Delete a showtime by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShowtime(@PathVariable Long id) {
        showtimeService.deleteShowtime(id);
        return ResponseEntity.noContent().build();
    }

    // Get details of a specific showtime by ID
    @GetMapping("/{id}")
    public ResponseEntity<Showtime> getShowtimeById(@PathVariable Long id) {
        Showtime showtime = showtimeService.getShowtimeById(id);
        return ResponseEntity.ok(showtime);
    }

    // Get all showtimes
    @GetMapping
    public ResponseEntity<List<Showtime>> getAllShowtimes() {
        List<Showtime> showtimes = showtimeService.getAllShowtimes();
        return ResponseEntity.ok(showtimes);
    }

    // Get showtimes for a specific movie
    @GetMapping("/movie/{movieId}")
    public ResponseEntity<List<Showtime>> getShowtimesByMovie(@PathVariable Long movieId) {
        List<Showtime> showtimes = showtimeService.getShowtimesByMovie(movieId);
        return ResponseEntity.ok(showtimes);
    }

    // Get showtimes for a specific theater
    @GetMapping("/theater/{theaterId}")
    public ResponseEntity<List<Showtime>> getShowtimesByTheater(@PathVariable Long theaterId) {
        List<Showtime> showtimes = showtimeService.getShowtimesByTheater(theaterId);
        return ResponseEntity.ok(showtimes);
    }
}

