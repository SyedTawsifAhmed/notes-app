# Notes App
A simple backend for an application that saves notes, and filters them with tags

## API demonstration and code for Notes App Backend
[![API demonstration and code for Notes App Backend](http://img.youtube.com/vi/ogRKo3DEPqc/0.jpg)](https://youtu.be/ogRKo3DEPqc)

# API Routes
- ```"ObjectId"``` example: '65f3a9d2d1c7f1001c3e4567'
- ```Date``` example: '2025-03-16T12:34:56.789Z'
- All requests in Tags and Notes require a valid session cookie. Ensure the client includes cookies in requests.
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
  ```
- **Response Body:**
  ```json
  {
    "token": "jwt-token-here"
  }
  ```
### Login
- **Endpoint:** `POST /auth/login`
- **Description:** Logs in a user.
- **Request Body:**
  ```json
  {
    "email": "example@email.com",
    "password": "securepassword"
  }
  ```
- **Response Body:**
  ```json
  {
    "token": "jwt-token-here"
  }
  ```
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
    "name": "exampleTag"
  }
  ```
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "name": "exampleTag",
    "userId": "ObjectId",
    "createdAt": "Date",
    "updatedAt": "Date",
    "__v": 0
  }
  ```
### Get all tags
- **Endpoint:** `GET /tag/`
- **Description:** Finds all tags associated with the user
- **Response Body:**
  ```
  [
    {
      "_id": "ObjectId",
      "name": "exampleTag",
      "userId": "ObjectId",
      "createdAt": "Date",
      "updatedAt": "Date",
      "__v": 0
    }
    ...
  ]
  ```
### Delete
- **Endpoint:** `DELETE /tag/:tagId`
- **Description:** Deletes specified tag
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "name": "exampleTag",
    "userId": "ObjectId",
    "createdAt": "Date",
    "updatedAt": "Date",
    "__v": 0
  }
  ```
## Notes
### Create
- **Endpoint:** `POST /note/`
- **Description:** Creates a new note object.
- **Request Body:**
  ```json
  {
    "title": "exampleTitle",
    "content": "exampleContent"
  }
  ```
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "exampleTitle",
    "content": "exampleContent",
    "userId": "ObjectId",
    "tagId": null,
    "createdAt": "Date",
    "updatedAt": "Date",
    "__v": 0
  }
  ```
### Get all notes
- **Endpoint:** `GET /note/`
- **Description:** Finds all notes associated with the user
- **Response Body:**
  ```
  [
    {
      "_id": "ObjectId",
      "title": "exampleTitle",
      "content": "exampleContent",
      "userId": "ObjectId",
      "tagId": null,
      "createdAt": "Date",
      "updatedAt": "Date",
      "__v": 0
    }
    ...
  ]
  ```
### Get single note
- **Endpoint:** `GET /note/:noteId`
- **Description:** Finds the note with _id noteId
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "exampleTitle",
    "content": "exampleContent",
    "userId": "ObjectId",
    "tagId": null,
    "createdAt": "Date",
    "updatedAt": "Date",
    "__v": 0
  }
  ```
### Update note
- **Endpoint:** `PUT /note/:noteId`
- **Description:** Updates a note's title and content.
- **Request Body:**
  ```json
  {
    "title": "newTitle",
    "content": "newContent"
  }
  ```
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "newTitle",
    "content": "newContent",
    "userId": "ObjectId",
    "tagId": null,
    "createdAt": "Date",
    "updatedAt": "Date (changed)",
    "__v": 0
  }
  ```
### Add tag
- **Endpoint:** `PATCH /note/add-tag/:noteId`
- **Description:** Adds a reference to a tag to note.
- **Request Body:**
  ```json
  {
    "tagId": "ObjectId"
  }
  ```
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "newTitle",
    "content": "newContent",
    "userId": "ObjectId",
    "tagId": "ObjectId (changed)",
    "createdAt": "Date",
    "updatedAt": "Date (changed)",
    "__v": 0
  }
  ```
### Remove tag
- **Endpoint:** `PATCH /note/remove-tag/:noteId`
- **Description:** removes the reference to a tag from note.
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "newTitle",
    "content": "newContent",
    "userId": "ObjectId",
    "tagId": null,
    "createdAt": "Date",
    "updatedAt": "Date (changed)",
    "__v": 0
  }
  ```
### Delete note
- **Endpoint:** `DELETE /note/:noteId`
- **Description:** Deletes a note associated with the user.
- **Response Body:**
  ```json
  {
    "_id": "ObjectId",
    "title": "newTitle",
    "content": "newContent",
    "userId": "ObjectId",
    "tagId": null,
    "createdAt": "Date",
    "updatedAt": "Date",
    "__v": 0
  }
  ```
  



