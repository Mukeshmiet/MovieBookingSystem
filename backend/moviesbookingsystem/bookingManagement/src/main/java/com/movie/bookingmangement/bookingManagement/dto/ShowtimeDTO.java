package com.movie.bookingmangement.bookingManagement.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ShowtimeDTO {
    private Long showtimeId;
    private LocalDate showDate;
    private LocalTime showTime;
    private Long movieId;
    private Long theaterId;
	public Long getShowtimeId() {
		return showtimeId;
	}
	public void setShowtimeId(Long showtimeId) {
		this.showtimeId = showtimeId;
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
	public ShowtimeDTO(Long showtimeId, LocalDate showDate, LocalTime showTime, Long movieId, Long theaterId) {
		super();
		this.showtimeId = showtimeId;
		this.showDate = showDate;
		this.showTime = showTime;
		this.movieId = movieId;
		this.theaterId = theaterId;
	}
	@Override
	public String toString() {
		return "ShowtimeDTO [showtimeId=" + showtimeId + ", showDate=" + showDate + ", showTime=" + showTime
				+ ", movieId=" + movieId + ", theaterId=" + theaterId + "]";
	}
	public ShowtimeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    

    // Getters and Setters
}
