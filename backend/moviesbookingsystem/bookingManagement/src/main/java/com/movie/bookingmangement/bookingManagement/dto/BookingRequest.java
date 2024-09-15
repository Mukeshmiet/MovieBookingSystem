package com.movie.bookingmangement.bookingManagement.dto;

public class BookingRequest {

	 private Long showtimeId;
	    private int numberOfTickets;
		public Long getShowtimeId() {
			return showtimeId;
		}
		public void setShowtimeId(Long showtimeId) {
			this.showtimeId = showtimeId;
		}
		public int getNumberOfTickets() {
			return numberOfTickets;
		}
		public void setNumberOfTickets(int numberOfTickets) {
			this.numberOfTickets = numberOfTickets;
		}
		@Override
		public String toString() {
			return "BookingRequest [showtimeId=" + showtimeId + ", numberOfTickets=" + numberOfTickets + "]";
		}
		public BookingRequest(Long showtimeId, int numberOfTickets) {
			super();
			this.showtimeId = showtimeId;
			this.numberOfTickets = numberOfTickets;
		}
		public BookingRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
	    
	    
}
