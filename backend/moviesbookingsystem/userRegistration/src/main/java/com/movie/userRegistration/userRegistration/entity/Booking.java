package com.movie.userRegistration.userRegistration.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    
    private String movieName;
    private String theaterName;
    private String showtime;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getTheaterName() {
		return theaterName;
	}

	public void setTheaterName(String theaterName) {
		this.theaterName = theaterName;
	}

	public String getShowtime() {
		return showtime;
	}

	public void setShowtime(String showtime) {
		this.showtime = showtime;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Booking(Long bookingId, String movieName, String theaterName, String showtime, User user) {
		super();
		this.bookingId = bookingId;
		this.movieName = movieName;
		this.theaterName = theaterName;
		this.showtime = showtime;
		this.user = user;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", movieName=" + movieName + ", theaterName=" + theaterName
				+ ", showtime=" + showtime + ", user=" + user + "]";
	}

    // Getters and Setters
}

