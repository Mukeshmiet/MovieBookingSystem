package com.movie.ShowtimeManagement.ShowtimeManagement.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ShowtimeRequest {
	
	 private Long movieId;
	    private Long theaterId;
	    private LocalDate showDate;
	    private LocalTime showTime;
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
		public ShowtimeRequest(Long movieId, Long theaterId, LocalDate showDate, LocalTime showTime) {
			super();
			this.movieId = movieId;
			this.theaterId = theaterId;
			this.showDate = showDate;
			this.showTime = showTime;
		}
		public ShowtimeRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
		@Override
		public String toString() {
			return "ShowtimeRequest [movieId=" + movieId + ", theaterId=" + theaterId + ", showDate=" + showDate
					+ ", showTime=" + showTime + "]";
		}

}
