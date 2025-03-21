# SPA Node REST API

This project is a simple blog application consisting of a Single Page Application (SPA) frontend and a REST API backend.
It demonstrates how to serve JSON-based data using a Node.js REST API.

## Project Structure

public/ index.html # Frontend HTML file 
  scripts/ index.js # Frontend JavaScript logic 
  styles/ index.css # Frontend styles 

server/ 
.gitignore # Git ignore file 
package.json # Node.js project configuration

  src/ app.js # Backend entry point 
       config.js # Configuration variables
 
  api/ 
    express-api.js # Express API configuration
    express/
      middleware/ 
      error-middleware.js # Error middleware 
    model.js # API error models 
    posts-router.js # Posts endpoints 
    tags-router.js # Tags endpoints
  
  modules/
  posts/ 
    posts-repository.js # Posts data handling
    posts-service.js # Posts business logic
    comments/ comments-repository.js # Comments data handling 
  repository/ 
    posts.json # Posts data 
    comments.json # Comments data 
  services/ 
    index.js # Service initialization

## Installation

1. Clone the repository:
   bash
   git clone <repo-url>
   cd <repo-directory>

2. Install dependencies:
  cd server
  npm install

3. Start the server:
  npm start

4. Open your browser and navigate to:
  http://localhost:3080

## API Endpoints

GET /api/posts

Description: Returns all blog posts.
Example Response:
```{
  "data": [
    {
      "id": 1,
      "title": "First post in sports",
      "headline": "This is our first post",
      "body": "This is the content of our first post",
      "created_at": "2023-02-11",
      "tags": ["Sports"]
    }
  ]
}
```
GET /api/posts/:id

Description: Returns a specific blog post by ID.
Example Response:
```{
  "data": {
    "id": 1,
    "title": "First post in sports",
    "headline": "This is our first post",
    "body": "This is the content of our first post",
    "created_at": "2023-02-11",
    "tags": ["Sports"]
  }
}
```
GET /api/posts/:id/comments

Description: Returns comments for a specific blog post.
Example Response:
```{
  "data": {
    "id": 1,
    "created_at": "2023-02-13",
    "author": "Test User A",
    "body": "Lorem ipsum dolor sit amet."
  }
}
```

GET /api/tags/:name

Description: Returns blog posts associated with a specific tag.
Example Response: Same as GET /api/posts.

## Frontend
The frontend is a simple SPA built with HTML, CSS, and JavaScript. It uses the API to display data. The following routes are available:

/ or /posts: Displays a list of all blog posts.
/posts/:id: Displays details and comments for a specific blog post.
/tags/:name: Displays blog posts associated with a specific tag.
/requirements: Summarizes the API requirements.

## Dependencies
Backend:
  Express - REST API framework
  CORS - CORS support
  
## Developer Notes
Data is stored in JSON files (posts.json, comments.json).
Error handling is implemented using the ApiError class and errorMiddleware.
The SPA files are served from the same server as the API.

## License
This project is free to use and modify.
