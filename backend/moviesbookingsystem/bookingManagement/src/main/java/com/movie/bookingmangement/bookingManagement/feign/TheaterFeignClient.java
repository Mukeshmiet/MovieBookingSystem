package com.movie.bookingmangement.bookingManagement.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.bookingmangement.bookingManagement.dto.TheaterDTO;

@FeignClient(name = "theater-service")
public interface TheaterFeignClient {

    @GetMapping("/api/theaters/{id}")
    TheaterDTO getTheaterById(@PathVariable("id") Long id);
}
