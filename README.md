# Quote of the Day API

A simple Node.js API that provides a random quote each time it is accessed.

## Features

-   Provides a random quote from a database.
-   Allows adding, updating, and deleting quotes (requires authentication).
-   User authentication with JWT.

## Technologies Used

-   Node.js
-   Express.js
-   Mongoose
-   MongoDB
-   JSON Web Tokens (JWT)
-   cors
-   dotenv

## Installation

1.  Clone the repository:

    
    git clone <repository-url>
    cd quote-of-the-day-api
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    -   Create a `.env` file in the root directory.
    -   Add the following environment variables:

        
        PORT=3000
        MONGODB_URI=<your-mongodb-connection-string>
        JWT_SECRET=<your-jwt-secret>
        

4.  Start the server:

    
    npm start
    

## API Endpoints

-   `GET /api/quotes/random`: Returns a random quote.
-   `GET /api/quotes`: Returns all quotes.
-   `GET /api/quotes/:id`: Returns a specific quote by ID.
-   `POST /api/quotes`: Creates a new quote (requires authentication).
-   `PUT /api/quotes/:id`: Updates a quote (requires authentication).
-   `DELETE /api/quotes/:id`: Deletes a quote (requires authentication).
-   `POST /api/users/register`: Registers a new user.
-   `POST /api/users/login`: Logs in an existing user.
-   `GET /protected`: Example protected route.

## Authentication

-   Authentication is implemented using JWT.
-   To access protected routes, include the JWT token in the `Authorization` header as a Bearer token.

## Error Handling

-   The API uses a custom error handling middleware to return consistent error responses.
