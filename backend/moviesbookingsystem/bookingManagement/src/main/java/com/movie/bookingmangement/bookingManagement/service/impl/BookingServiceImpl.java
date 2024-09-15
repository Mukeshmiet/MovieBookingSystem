package com.movie.bookingmangement.bookingManagement.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.bookingmangement.bookingManagement.dao.BookingRepository;
import com.movie.bookingmangement.bookingManagement.dto.BookingRequest;
import com.movie.bookingmangement.bookingManagement.dto.ShowtimeDTO;
import com.movie.bookingmangement.bookingManagement.entity.Booking;
import com.movie.bookingmangement.bookingManagement.entity.User;
import com.movie.bookingmangement.bookingManagement.feign.MovieFeignClient;
import com.movie.bookingmangement.bookingManagement.feign.ShowtimeFeignClient;
import com.movie.bookingmangement.bookingManagement.feign.TheaterFeignClient;
import com.movie.bookingmangement.bookingManagement.feign.UserServiceClient;
import com.movie.bookingmangement.bookingManagement.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

//    @Autowired
//    private MovieFeignClient movieFeignClient;
//
//    @Autowired
//    private TheaterFeignClient theaterFeignClient;

    @Autowired
    private ShowtimeFeignClient showtimeFeignClient;
    
    @Autowired
    private UserServiceClient userServiceClient;
    
    private static final Long DEFAULT_USER_ID = 2L;
    

//    @Override
//    public Booking addBooking(Booking booking) {
//        // Fetch details from other microservices
//        ShowtimeDTO showtimeDTO = showtimeFeignClient.getShowtimeById(booking.getShowtimeId());
//        MovieDTO movieDTO = movieFeignClient.getMovieById(showtimeDTO.getMovieId());
//        TheaterDTO theaterDTO = theaterFeignClient.getTheaterById(showtimeDTO.getTheaterId());
//
//        // Print details (for debugging)
//        System.out.println("Booking for Movie: " + movieDTO.getTitle() + " in Theater: " + theaterDTO.getName());
//
//        // Set booking date and calculate total price
//        booking.setBookingDate(LocalDate.now());
//        double ticketPrice = 10.0; // Example price per ticket
//        booking.setTotalPrice(ticketPrice * booking.getNumberOfTickets());
//
//        return bookingRepository.save(booking);
//    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    @Override
    public Booking updateBooking(Long id, Booking bookingDetails) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setNumberOfTickets(bookingDetails.getNumberOfTickets());
        booking.setTotalPrice(bookingDetails.getTotalPrice());
        return bookingRepository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        bookingRepository.delete(booking);
    }

	@Override
	public Booking addBooking(Booking booking) {
		// TODO Auto-generated method stub
		return null;
	}

	public Booking addBooking(Long userId, BookingRequest bookingRequest) {
        // Use defaultUserId instead of fetching user details
        Long defaultUserId = DEFAULT_USER_ID;

        // Get the showtime details
        ShowtimeDTO showtimeDTO = showtimeFeignClient.getShowtimeById(bookingRequest.getShowtimeId());

        // Calculate total price
        double ticketPrice = 10.0;  // You can change this value based on logic or retrieve dynamically
        double totalPrice = ticketPrice * bookingRequest.getNumberOfTickets();

        // Create a new booking
        Booking booking = new Booking();
        booking.setUserId(defaultUserId);  // Set the default userId
        booking.setShowtimeId(bookingRequest.getShowtimeId());
        booking.setBookingDate(LocalDate.now());  // Current date as booking date
        booking.setNumberOfTickets(bookingRequest.getNumberOfTickets());
        booking.setTotalPrice(totalPrice);

        // Save the booking in the repository
        return bookingRepository.save(booking);
    }
	
}
