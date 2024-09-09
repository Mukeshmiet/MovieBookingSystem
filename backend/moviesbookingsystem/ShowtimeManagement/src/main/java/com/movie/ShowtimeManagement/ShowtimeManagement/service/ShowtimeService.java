package com.movie.ShowtimeManagement.ShowtimeManagement.service;

import java.util.List;

import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;

public interface ShowtimeService {
    
    Showtime addShowtime(Showtime showtime);
    
    List<Showtime> getAllShowtimes();
    
    Showtime getShowtimeById(Long showtimeId);
    
    List<Showtime> getShowtimesByMovieId(Long movieId);
    
    List<Showtime> getShowtimesByTheaterId(Long theaterId);
    
    Showtime updateShowtime(Long showtimeId, Showtime showtimeDetails);
    
    void deleteShowtime(Long showtimeId);
}