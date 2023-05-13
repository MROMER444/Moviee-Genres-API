# Moviee-Genres-API
This is a simple RESTful API for managing movie genres, built with Node.js and Express. This project was created as a task for a programming course.

# Validation
The API uses Joi for input validation. The name field of the movie genre is required and must be at least 3 characters long.


# Installation
Clone this repository to your local machine:
git clone https://github.com/MROMER444/movie-genres-api.git
Navigate to the project directory:
cd movie-genres-api
Install the dependencies:
npm install
Start the application:
npm start
# Usage
You can test the API using any tool that can make HTTP requests, such as Postman or cURL. The base URL for the API is http://localhost:3000/api.

The API has the following endpoints:

# GET /genres
Returns a list of all movie genres.

# GET /genres/:id
Returns the movie genre with the given ID.

# POST /genres
Creates a new movie genre.

# PUT /genres/:id
Updates the name of the movie genre with the given ID.

# DELETE /genres/:id
Deletes the movie genre with the given ID.

# Contributing
Contributions are welcome! If you find a bug or would like to add a new feature, feel free to submit an issue or pull request.

