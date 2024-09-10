package com.movie.mangement.MovieManagement.service;

import java.util.List;
import java.util.Optional;

import com.movie.mangement.MovieManagement.Entity.Movie;

public interface MovieService {

    Movie addMovie(Movie movie);

    List<Movie> getAllMovies();

    Optional<Movie> getMovieById(Long id);

    Movie updateMovie(Long id, Movie movieDetails);

    void deleteMovie(Long id);
}