package com.movie.bookingmangement.bookingManagement.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.bookingmangement.bookingManagement.dto.MovieDTO;

@FeignClient(name = "MOVIEMANAGEMENT",url = "http://localhost:8083")
public interface MovieFeignClient {

    @GetMapping("/api/movies/{id}")
    MovieDTO getMovieById(@PathVariable("id") Long id);
}
