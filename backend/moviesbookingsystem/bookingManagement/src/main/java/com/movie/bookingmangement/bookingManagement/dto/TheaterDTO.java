package com.movie.bookingmangement.bookingManagement.dto;

public class TheaterDTO {
    private Long theaterId;
    private String name;
    private String location;
    private int capacity;
    
    
	public Long getTheaterId() {
		return theaterId;
	}
	public void setTheaterId(Long theaterId) {
		this.theaterId = theaterId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public TheaterDTO(Long theaterId, String name, String location, int capacity) {
		super();
		this.theaterId = theaterId;
		this.name = name;
		this.location = location;
		this.capacity = capacity;
	}
	public TheaterDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "TheaterDTO [theaterId=" + theaterId + ", name=" + name + ", location=" + location + ", capacity="
				+ capacity + "]";
	}
    
    
}
