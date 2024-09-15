package com.movie.ShowtimeManagement.ShowtimeManagement.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.ShowtimeManagement.ShowtimeManagement.dto.Theater;

@FeignClient(name = "THEATERMANAGEMENT",url = "http://localhost:8082")
public interface TheaterClient {

    @GetMapping("/theaters/{id}")
    Theater getTheaterById(@PathVariable("id") Long id);
   
}