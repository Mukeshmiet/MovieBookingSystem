package com.movie.ShowtimeManagement.ShowtimeManagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.ShowtimeManagement.ShowtimeManagement.entity.Showtime;

public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {
    List<Showtime> findByMovieId(Long movieId);
    List<Showtime> findByTheaterId(Long theaterId);
}
