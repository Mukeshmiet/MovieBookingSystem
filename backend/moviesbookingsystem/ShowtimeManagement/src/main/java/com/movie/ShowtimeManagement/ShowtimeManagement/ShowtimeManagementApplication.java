package com.movie.ShowtimeManagement.ShowtimeManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients 
public class ShowtimeManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShowtimeManagementApplication.class, args);
	}

}
