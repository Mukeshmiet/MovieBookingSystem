package com.movie.userRegistration.userRegistration.entity;

import java.util.Objects;

public class LoginRequest {
    private String username;
    private String password;

    // No-argument constructor
    public LoginRequest() {
    }

    // Constructor with arguments
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter for username
    public String getUsername() {
        return username;
    }

    // Setter for username
    public void setUsername(String username) {
        this.username = username;
    }

    // Getter for password
    public String getPassword() {
        return password;
    }

    // Setter for password
    public void setPassword(String password) {
        this.password = password;
    }

    // toString method for better debugging
    @Override
    public String toString() {
        return "LoginRequest{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    // equals method for comparing LoginRequest objects
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoginRequest that = (LoginRequest) o;
        return username.equals(that.username) &&
                password.equals(that.password);
    }

    // hashCode method for using LoginRequest objects in hash-based collections
    @Override
    public int hashCode() {
        return Objects.hash(username, password);
    }
}

