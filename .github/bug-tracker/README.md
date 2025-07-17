# Bug Tracker Application

## Overview
The Bug Tracker application is a full-stack MERN (MongoDB, Express, React, Node.js) project designed to help users report, track, and manage bugs efficiently. This application consists of a backend API for handling bug data and a frontend interface for user interaction.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

```
bug-tracker
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── bugController.js
│   │   ├── models
│   │   │   └── Bug.js
│   │   ├── routes
│   │   │   └── bugRoutes.js
│   │   ├── tests
│   │   │   └── bug.test.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── BugList.jsx
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   ├── tests
│   │   │   └── BugList.test.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Installation

### Backend
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Backend
1. Start the backend server:
   ```
   npm start
   ```
   The server will run on `http://localhost:5000`.

### Frontend
1. Start the frontend application:
   ```
   npm start
   ```
   The application will run on `http://localhost:3000`.

## Testing

### Backend
To run tests for the backend:
```
cd backend
npm test
```

### Frontend
To run tests for the frontend:
```
cd frontend
npm test
```

## Debugging Techniques
- Use console logs to trace the flow of data and identify issues.
- Utilize debugging tools in your browser for frontend issues.
- Use Postman or similar tools to test API endpoints independently.
- Check for common errors such as CORS issues, incorrect API endpoints, and database connection problems.

## Conclusion
This Bug Tracker application provides a robust solution for managing bugs, with a clear structure and systematic testing practices to ensure reliability and maintainability.