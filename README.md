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
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Installation

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Backend
1. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### Frontend
1. Start the frontend application:
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:5173`.

## Testing

### Backend
To run tests for the backend:
```bash
cd backend
npm test
```

### Frontend
To run tests for the frontend:
```bash
cd frontend
npm test
```

## Debugging Techniques
- Use console logs to trace the flow of data and identify issues.
- Utilize debugging tools in your browser for frontend issues.
- Use Postman or similar tools to test API endpoints independently.
- Check for common errors such as CORS issues, incorrect API endpoints, and database connection problems.
- Use Node.js inspector for backend debugging.
- Implement React error boundaries for graceful error handling in the UI.

## Error Handling
- Backend: Uses Express middleware for centralized error handling.
- Frontend: Implements React error boundaries to catch and display UI errors.

## Documentation
- This README includes setup, running, testing, and debugging instructions.
- Code is commented for clarity and maintainability.

## Conclusion
This Bug Tracker application provides a robust solution for managing bugs, with a clear structure and systematic testing
