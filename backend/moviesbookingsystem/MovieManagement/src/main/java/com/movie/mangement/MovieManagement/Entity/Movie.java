package com.movie.mangement.MovieManagement.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieId;

    private String title;
    private String description;
    private String genre;
    private int duration;
    private double rating;
	public Long getMovieId() {
		return movieId;
	}
	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public Movie(Long movieId, String title, String description, String genre, int duration, double rating) {
		super();
		this.movieId = movieId;
		this.title = title;
		this.description = description;
		this.genre = genre;
		this.duration = duration;
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", title=" + title + ", description=" + description + ", genre=" + genre
				+ ", duration=" + duration + ", rating=" + rating + "]";
	}
	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
