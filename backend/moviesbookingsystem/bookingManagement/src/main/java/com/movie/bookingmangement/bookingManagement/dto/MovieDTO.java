package com.movie.bookingmangement.bookingManagement.dto;

public class MovieDTO {
    private Long movieId;
    private String title;
    private String description;
    private String genre;
    private String duration;
    private Double rating;
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
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	public MovieDTO(Long movieId, String title, String description, String genre, String duration, Double rating) {
		super();
		this.movieId = movieId;
		this.title = title;
		this.description = description;
		this.genre = genre;
		this.duration = duration;
		this.rating = rating;
	}
	public MovieDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "MovieDTO [movieId=" + movieId + ", title=" + title + ", description=" + description + ", genre=" + genre
				+ ", duration=" + duration + ", rating=" + rating + "]";
	}
    
    
}
