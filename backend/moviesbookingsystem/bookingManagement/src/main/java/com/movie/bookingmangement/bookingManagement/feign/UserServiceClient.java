package com.movie.bookingmangement.bookingManagement.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.bookingmangement.bookingManagement.entity.User;

@FeignClient(name = "USERREGISTRATION", url = "http://localhost:8085")
public interface UserServiceClient {

    @GetMapping("/api/auth/{id}")
	User getUserById(Long userId);
}
