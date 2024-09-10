package com.movie.bookingmangement.bookingManagement.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(nullable = false)
    private Long userId;  // User who made the booking

    @Column(nullable = false)
    private Long showtimeId;  // Showtime booked

    @Column(nullable = false)
    private LocalDate bookingDate;

    @Column(nullable = false)
    private int numberOfTickets;

    @Column(nullable = false)
    private double totalPrice;

    // Getters and Setters
    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getShowtimeId() { return showtimeId; }
    public void setShowtimeId(Long showtimeId) { this.showtimeId = showtimeId; }

    public LocalDate getBookingDate() { return bookingDate; }
    public void setBookingDate(LocalDate bookingDate) { this.bookingDate = bookingDate; }

    public int getNumberOfTickets() { return numberOfTickets; }
    public void setNumberOfTickets(int numberOfTickets) { this.numberOfTickets = numberOfTickets; }

    public double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }
	public Booking(Long bookingId, Long userId, Long showtimeId, LocalDate bookingDate, int numberOfTickets,
			double totalPrice) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.showtimeId = showtimeId;
		this.bookingDate = bookingDate;
		this.numberOfTickets = numberOfTickets;
		this.totalPrice = totalPrice;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", userId=" + userId + ", showtimeId=" + showtimeId
				+ ", bookingDate=" + bookingDate + ", numberOfTickets=" + numberOfTickets + ", totalPrice=" + totalPrice
				+ "]";
	}
    
    
}
