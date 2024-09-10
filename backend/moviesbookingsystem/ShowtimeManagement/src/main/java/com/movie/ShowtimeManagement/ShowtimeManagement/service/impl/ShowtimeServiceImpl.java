package com.movie.ShowtimeManagement.ShowtimeManagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.ShowtimeManagement.ShowtimeManagement.dao.ShowtimeRepository;
import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;
import com.movie.ShowtimeManagement.ShowtimeManagement.exception.ResourceNotFoundException;
import com.movie.ShowtimeManagement.ShowtimeManagement.service.ShowtimeService;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {

    @Autowired
    private ShowtimeRepository showtimeRepository;

    @Override
    public Showtime addShowtime(Showtime showtime) {
        return showtimeRepository.save(showtime);
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    @Override
    public Showtime getShowtimeById(Long showtimeId) {
        return showtimeRepository.findById(showtimeId)
                .orElseThrow(() -> new ResourceNotFoundException("Showtime not found with id " + showtimeId));
    }

    @Override
    public List<Showtime> getShowtimesByMovieId(Long movieId) {
        return showtimeRepository.findByMovieId(movieId);
    }

    @Override
    public List<Showtime> getShowtimesByTheaterId(Long theaterId) {
        return showtimeRepository.findByTheaterId(theaterId);
    }

    @Override
    public Showtime updateShowtime(Long showtimeId, Showtime showtimeDetails) {
        Showtime existingShowtime = getShowtimeById(showtimeId); // Fetch the existing showtime

        existingShowtime.setShowDate(showtimeDetails.getShowDate());
        existingShowtime.setShowTime(showtimeDetails.getShowTime());
        existingShowtime.setMovieId(showtimeDetails.getMovieId());
        existingShowtime.setTheaterId(showtimeDetails.getTheaterId());

        return showtimeRepository.save(existingShowtime); // Update and save
    }

    @Override
    public void deleteShowtime(Long showtimeId) {
        Showtime showtime = getShowtimeById(showtimeId); // Ensure the showtime exists
        showtimeRepository.delete(showtime);
    }
}
