package com.movie.mangement.MovieManagement.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.mangement.MovieManagement.Entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
