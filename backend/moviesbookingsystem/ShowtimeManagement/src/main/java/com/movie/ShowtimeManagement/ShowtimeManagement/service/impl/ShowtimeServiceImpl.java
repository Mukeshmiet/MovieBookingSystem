package com.movie.ShowtimeManagement.ShowtimeManagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.ShowtimeManagement.ShowtimeManagement.client.MovieClient;
import com.movie.ShowtimeManagement.ShowtimeManagement.client.TheaterClient;
import com.movie.ShowtimeManagement.ShowtimeManagement.dao.ShowtimeRepository;
import com.movie.ShowtimeManagement.ShowtimeManagement.dto.Movie;
import com.movie.ShowtimeManagement.ShowtimeManagement.dto.ShowtimeRequest;
import com.movie.ShowtimeManagement.ShowtimeManagement.dto.Theater;
import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;
import com.movie.ShowtimeManagement.ShowtimeManagement.service.ShowtimeService;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {

    @Autowired
    private ShowtimeRepository showtimeRepository;

    @Autowired
    private MovieClient movieClient;

    @Autowired
    private TheaterClient theaterClient;

    @Override
    public Showtime createShowtime(ShowtimeRequest showtimeRequest) {
        // Fetch movie details from the MovieService using Feign client
        Movie movie = movieClient.getMovieById(showtimeRequest.getMovieId());

        // Fetch theater details from the TheaterService using Feign client
        Theater theater = theaterClient.getTheaterById(showtimeRequest.getTheaterId());

        // Create a new Showtime entity
        Showtime showtime = new Showtime();
        showtime.setMovieId(movie.getMovieId()); // Using MovieDTO
        showtime.setTheaterId(theater.getTheaterId()); // Using TheaterDTO
        showtime.setShowDate(showtimeRequest.getShowDate());
        showtime.setShowTime(showtimeRequest.getShowTime());

        // Save the showtime in the repository (database)
        return showtimeRepository.save(showtime);
    }

    @Override
    public Showtime updateShowtime(Long showtimeId, ShowtimeRequest showtimeRequest) {
        Showtime existingShowtime = showtimeRepository.findById(showtimeId)
                .orElseThrow(() -> new RuntimeException("Showtime not found"));

        // Fetch movie and theater details again in case they have been updated
        Movie movie = movieClient.getMovieById(showtimeRequest.getMovieId());
        Theater theater = theaterClient.getTheaterById(showtimeRequest.getTheaterId());

        // Update showtime details
        existingShowtime.setMovieId(movie.getMovieId());
        existingShowtime.setTheaterId(theater.getTheaterId());
        existingShowtime.setShowDate(showtimeRequest.getShowDate());
        existingShowtime.setShowTime(showtimeRequest.getShowTime());

        return showtimeRepository.save(existingShowtime);
    }

    @Override
    public void deleteShowtime(Long showtimeId) {
        // Delete a showtime by ID
        showtimeRepository.deleteById(showtimeId);
    }

    @Override
    public Showtime getShowtimeById(Long showtimeId) {
        // Retrieve a specific showtime by ID
        return showtimeRepository.findById(showtimeId)
                .orElseThrow(() -> new RuntimeException("Showtime not found"));
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        // Retrieve all showtimes
        return showtimeRepository.findAll();
    }

    @Override
    public List<Showtime> getShowtimesByMovie(Long movieId) {
        // Retrieve all showtimes for a specific movie
        return showtimeRepository.findByMovieId(movieId);
    }

    @Override
    public List<Showtime> getShowtimesByTheater(Long theaterId) {
        // Retrieve all showtimes for a specific theater
        return showtimeRepository.findByTheaterId(theaterId);
    }
}