# MovieBookingSystem

A comprehensive web application for browsing and booking movie tickets. Built as a Wipro Training Capstone Project.

## 📋 Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Movie Booking System is a full-stack web application that enables users to:
- Browse available movies and showtimes
- Book and manage theater tickets
- Manage user accounts and preferences
- View booking history

## 🏗️ Architecture

The application follows a **microservices architecture** pattern:

### Backend Services (Java/Spring Boot)
- **User Registration Service**: Handles user authentication and profile management
- **Movie Management Service**: Manages movie catalog and details
- **Theater Management Service**: Handles theater and seat management
- **Showtime Management Service**: Manages movie showtimes and availability
- **Booking Management Service**: Handles ticket bookings and reservations
- **Service Registry**: Enables service discovery in microservices environment

### Frontend Application (JavaScript/React)
- **React-based UI**: Modern, responsive user interface
- **Vite Build Tool**: Fast development and optimized builds
- **Component Architecture**: Modular and reusable components

## ✨ Features

### User Features
✅ User registration and authentication
✅ Browse available movies
✅ View movie details and ratings
✅ Check showtimes and theater availability
✅ Book tickets for selected shows
✅ View and manage bookings
✅ Cancel bookings
✅ View booking history

### Admin Features
✅ Add and manage movies
✅ Manage theater information
✅ Create and update showtimes
✅ View booking statistics
✅ Manage user accounts

## 🛠️ Tech Stack

| Layer | Technology | Percentage |
|-------|-----------|-----------|
| Backend | Java, Spring Boot | 59.3% |
| Frontend | JavaScript, React, Vite | 37.3% |
| Styling | CSS | 3.1% |
| Markup | HTML | 0.3% |

### Additional Technologies
- **Database**: MySQL/PostgreSQL
- **API**: RESTful Web Services
- **Build Tool**: Maven (Backend), Vite (Frontend)
- **Version Control**: Git

## 📁 Project Structure

```
MovieBookingSystem/
├── backend/
│   └── moviesbookingsystem/
│       ├── MovieManagement/
│       ├── UserRegistration/
│       ├── TheaterManagement/
│       ├── ShowtimeManagement/
│       ├── BookingManagement/
│       └── ServiceRegistry/
├── frontend/
│   └── project/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── public/
│       ├── package.json
│       ├── vite.config.js
│       └── index.html
├── LICENSE
└── README.md
```

## 🚀 Setup Instructions

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend/moviesbookingsystem
   ```

2. **Configure database** (Edit application.properties):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/moviebooking
   spring.datasource.username=root
   spring.datasource.password=password
   ```

3. **Build the project**:
   ```bash
   mvn clean install
   ```

4. **Run services** (Start each service in separate terminals):
   ```bash
   # Service Registry
   java -jar ServiceRegistry/target/service-registry.jar
   
   # User Registration Service
   java -jar UserRegistration/target/user-registration.jar
   
   # Movie Management Service
   java -jar MovieManagement/target/movie-management.jar
   
   # Theater Management Service
   java -jar TheaterManagement/target/theater-management.jar
   
   # Showtime Management Service
   java -jar ShowtimeManagement/target/showtime-management.jar
   
   # Booking Management Service
   java -jar BookingManagement/target/booking-management.jar
   ```

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend/project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Access the application**:
   ```
   http://localhost:5173
   ```

## 📱 Usage

### User Workflow
1. Register or login to your account
2. Browse available movies
3. Select a movie and view showtimes
4. Choose seats and complete booking
5. Receive booking confirmation
6. Manage your bookings from user dashboard

### Admin Workflow
1. Login with admin credentials
2. Access admin dashboard
3. Add new movies or update existing ones
4. Manage theater information
5. Create showtimes for movies
6. View analytics and reports

## 🔌 API Endpoints

### User Registration Service
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/{id}` - Get user profile
- `PUT /api/users/{id}` - Update user profile

### Movie Management Service
- `GET /api/movies` - Get all movies
- `GET /api/movies/{id}` - Get movie details
- `POST /api/movies` - Add new movie (Admin)
- `PUT /api/movies/{id}` - Update movie (Admin)
- `DELETE /api/movies/{id}` - Delete movie (Admin)

### Theater Management Service
- `GET /api/theaters` - Get all theaters
- `GET /api/theaters/{id}` - Get theater details
- `GET /api/theaters/{id}/seats` - Get available seats

### Showtime Management Service
- `GET /api/showtimes` - Get all showtimes
- `GET /api/showtimes/movie/{movieId}` - Get showtimes for a movie
- `POST /api/showtimes` - Add new showtime (Admin)

### Booking Management Service
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/user/{userId}` - Get user bookings
- `GET /api/bookings/{id}` - Get booking details
- `DELETE /api/bookings/{id}` - Cancel booking

## 💾 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Movies Table
```sql
CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  genre VARCHAR(100),
  duration INT,
  rating DECIMAL(3,1),
  description TEXT,
  release_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Bookings Table
```sql
CREATE TABLE bookings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  showtime_id INT NOT NULL,
  seat_numbers VARCHAR(100),
  total_price DECIMAL(10,2),
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Project Name**: Movie Booking System  
**Type**: Capstone Project  
**Last Updated**: March 17, 2026
```
