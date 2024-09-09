package com.movie.ShowtimeManagement.ShowtimeManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;
import com.movie.ShowtimeManagement.ShowtimeManagement.service.ShowtimeService;

@RestController
@RequestMapping("/api/showtimes")
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    @PostMapping
    public ResponseEntity<Showtime> addShowtime(@RequestBody Showtime showtime) {
        return ResponseEntity.ok(showtimeService.addShowtime(showtime));
    }

    @GetMapping
    public List<Showtime> getAllShowtimes() {
        return showtimeService.getAllShowtimes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Showtime> getShowtimeById(@PathVariable Long id) {
        return ResponseEntity.ok(showtimeService.getShowtimeById(id));
    }

    @GetMapping("/movie/{movieId}")
    public List<Showtime> getShowtimesByMovieId(@PathVariable Long movieId) {
        return showtimeService.getShowtimesByMovieId(movieId);
    }

    @GetMapping("/theater/{theaterId}")
    public List<Showtime> getShowtimesByTheaterId(@PathVariable Long theaterId) {
        return showtimeService.getShowtimesByTheaterId(theaterId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShowtime(@PathVariable Long id) {
        showtimeService.deleteShowtime(id);
        return ResponseEntity.noContent().build();
    }

    // Update showtime, etc.
}

