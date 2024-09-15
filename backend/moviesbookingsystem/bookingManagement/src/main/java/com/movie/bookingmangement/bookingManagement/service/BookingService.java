package com.movie.bookingmangement.bookingManagement.service;



import java.util.List;
import java.util.Optional;

import com.movie.bookingmangement.bookingManagement.dto.BookingRequest;
import com.movie.bookingmangement.bookingManagement.entity.Booking;

public interface BookingService {

    Booking addBooking(Booking booking);

    List<Booking> getAllBookings();

    Optional<Booking> getBookingById(Long id);

    Booking updateBooking(Long id, Booking bookingDetails);

    void deleteBooking(Long id);

	Booking addBooking(Long userId, BookingRequest bookingRequest) ;
}

