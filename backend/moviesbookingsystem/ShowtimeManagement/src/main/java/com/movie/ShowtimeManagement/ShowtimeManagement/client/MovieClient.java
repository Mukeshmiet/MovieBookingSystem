package com.movie.ShowtimeManagement.ShowtimeManagement.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.ShowtimeManagement.ShowtimeManagement.dto.Movie;

@FeignClient(name = "MOVIEMANAGEMENT" , url = "http://localhost:8083")
public interface MovieClient {
    
    @GetMapping("/movies/{id}")
    Movie getMovieById(@PathVariable("id") Long id);

    
}