package com.movie.theatermangement.TheaterManagement.service;

import java.util.List;
import java.util.Optional;

import com.movie.theatermangement.TheaterManagement.entity.Theater;

public interface TheaterService {

    Theater addTheater(Theater theater);

    List<Theater> getAllTheaters();

    Optional<Theater> getTheaterById(Long id);

    Theater updateTheater(Long id, Theater theaterDetails);

    void deleteTheater(Long id);
}
