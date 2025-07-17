# Bug Tracker Backend

## Overview
This is the backend for the Bug Tracker application built using Node.js, Express, and MongoDB. The backend provides a RESTful API for managing bug reports, allowing users to create, read, update, and delete bugs.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd bug-tracker/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database. You can use a local MongoDB instance or a cloud service like MongoDB Atlas. Update the connection string in the `app.js` file accordingly.

## Running the Server

To start the server, run the following command:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

### Bugs
- **GET /api/bugs**: Retrieve all bugs.
- **POST /api/bugs**: Create a new bug.
- **PUT /api/bugs/:id**: Update a bug by ID.
- **DELETE /api/bugs/:id**: Delete a bug by ID.

## Testing

To run the tests, use the following command:
```
npm test
```
This will execute the unit and integration tests defined in the `tests` directory.

## Debugging

For debugging, you can use tools like `nodemon` for automatic server restarts and `console.log` statements to trace issues. Additionally, consider using a debugger like the one built into your IDE.

## License
This project is licensed under the MIT License.