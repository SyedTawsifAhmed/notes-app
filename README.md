# Notes App
A simple backend for an application that saves notes, and filters them with tags

## API demonstration and code for Notes App Backend
[![API demonstration and code for Notes App Backend](http://img.youtube.com/vi/ogRKo3DEPqc/0.jpg)](https://youtu.be/ogRKo3DEPqc)

# API Routes
## Base URL
- http://localhost:5000/api
## Authentication
### Register
- **Endpoint:** `POST /auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "exampleUser",
    "email": "example@email.com",
    "password": "securepassword"
  }
- **Response Body:**
  ```json
  {
    "token": "jwt-token-here"
  }
### Login
- **Endpoint:** `POST /auth/login`
- **Description:** Logs in a user.
- **Request Body:**
  ```json
  {
    "email": "example@email.com",
    "password": "securepassword"
  }
- **Response Body:**
  ```json
  {
    "token": "jwt-token-here"
  }
### Logout
- **Endpoint:** `POST /auth/logout`
- **Description:** Clears cookie(s) and logs out the user.
- **Response:**
  ```Logged out```
## Tags
### Create
- **Endpoint:** `POST /tag/`
- **Description:** Creates a new tag object.
- **Request Body:**
  ```json
  {
    "name": "exampleTag",
  }
- **Response Body:**
  ```json
  {
    "_id": "ObjectId (e.g., '65f3a9d2d1c7f1001c3e4567')",
    "name": "exampleTag",
    "userId": "ObjectId (e.g., '65f3a9d2d1c7f1001c3e4567')",
    "createdAt": "Date (e.g., '2025-03-16T12:34:56.789Z')",
    "updatedAt": "Date (e.g., '2025-03-16T12:34:56.789Z')",
    "__v": 0
  }
  
