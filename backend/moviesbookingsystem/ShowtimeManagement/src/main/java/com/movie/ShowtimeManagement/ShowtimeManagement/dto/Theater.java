package com.movie.ShowtimeManagement.ShowtimeManagement.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Theater {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
	public Theater(Long theaterId, String name, String location, int capacity) {
		super();
		this.theaterId = theaterId;
		this.name = name;
		this.location = location;
		this.capacity = capacity;
	}
	@Override
	public String toString() {
		return "Theater [theaterId=" + theaterId + ", name=" + name + ", location=" + location + ", capacity="
				+ capacity + "]";
	}
	public Theater() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}

