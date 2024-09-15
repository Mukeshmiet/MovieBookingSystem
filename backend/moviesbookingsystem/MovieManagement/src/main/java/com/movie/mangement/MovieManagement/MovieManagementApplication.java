package com.movie.mangement.MovieManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
public class MovieManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieManagementApplication.class, args);
	}

}
