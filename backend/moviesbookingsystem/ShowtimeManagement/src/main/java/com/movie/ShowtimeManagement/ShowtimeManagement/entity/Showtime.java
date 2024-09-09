package com.movie.ShowtimeManagement.ShowtimeManagement.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Showtime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long showtimeId;

    private Long movieId; // Reference to movie from Movie service
    private Long theaterId; // Reference to theater from Theater service

    private LocalDate showDate;
    private LocalTime showTime;
	public Long getShowtimeId() {
		return showtimeId;
	}
	public void setShowtimeId(Long showtimeId) {
		this.showtimeId = showtimeId;
	}
	public Long getMovieId() {
		return movieId;
	}
	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}
	public Long getTheaterId() {
		return theaterId;
	}
	public void setTheaterId(Long theaterId) {
		this.theaterId = theaterId;
	}
	public LocalDate getShowDate() {
		return showDate;
	}
	public void setShowDate(LocalDate showDate) {
		this.showDate = showDate;
	}
	public LocalTime getShowTime() {
		return showTime;
	}
	public void setShowTime(LocalTime showTime) {
		this.showTime = showTime;
	}
	public Showtime(Long showtimeId, Long movieId, Long theaterId, LocalDate showDate, LocalTime showTime) {
		super();
		this.showtimeId = showtimeId;
		this.movieId = movieId;
		this.theaterId = theaterId;
		this.showDate = showDate;
		this.showTime = showTime;
	}
	public Showtime() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Showtime [showtimeId=" + showtimeId + ", movieId=" + movieId + ", theaterId=" + theaterId
				+ ", showDate=" + showDate + ", showTime=" + showTime + "]";
	}

    // Getters and Setters...
    
}
