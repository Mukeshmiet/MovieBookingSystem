package com.movie.theatermangement.TheaterManagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.theatermangement.TheaterManagement.entity.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Long> {
}
