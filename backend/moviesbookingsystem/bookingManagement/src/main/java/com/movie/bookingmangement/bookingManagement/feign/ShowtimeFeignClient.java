package com.movie.bookingmangement.bookingManagement.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.bookingmangement.bookingManagement.dto.ShowtimeDTO;

@FeignClient(name = "SHOWTIMEMANAGEMENT",url="http://localhost:8084")
public interface ShowtimeFeignClient {

    @GetMapping("/showtimes/{id}")
    ShowtimeDTO getShowtimeById(@PathVariable("id") Long id);
}