package com.movie.userRegistration.userRegistration.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.userRegistration.userRegistration.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Custom queries can be added here if needed
}
