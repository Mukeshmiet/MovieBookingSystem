package com.movie.ShowtimeManagement.ShowtimeManagement.service;

import java.util.List;

import com.movie.ShowtimeManagement.ShowtimeManagement.dto.ShowtimeRequest;
import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;

public interface ShowtimeService {
    
	Showtime createShowtime(ShowtimeRequest showtimeRequest);

    Showtime updateShowtime(Long showtimeId, ShowtimeRequest showtimeRequest);

    void deleteShowtime(Long showtimeId);

    Showtime getShowtimeById(Long showtimeId);

    List<Showtime> getAllShowtimes();

    List<Showtime> getShowtimesByMovie(Long movieId);

    List<Showtime> getShowtimesByTheater(Long theaterId);
}