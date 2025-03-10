# MERN Stack CSV Data Management API

A secure REST API built with Node.js, Express, and MongoDB for managing CSV data with authentication.

## Features

- 🔐 JWT Authentication
- 📊 CSV File Upload and Processing
- 📋 Data Retrieval
- 🔄 Automatic CSV to MongoDB Import
- 🛡️ Protected Routes
- 📁 Organized MVC Architecture

## Project Structure

```
src/
├── config/
│   ├── database.js    # MongoDB connection configuration
│   └── multer.js      # File upload configuration
├── middleware/
│   └── auth.js        # JWT authentication middleware
├── models/
│   └── Data.js        # MongoDB data schema
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── dataController.js  # Data operations logic
└── routes/
    ├── authRoutes.js     # Authentication routes
    └── dataRoutes.js     # Data operation routes
```

## Prerequisites

- Node.js (v12 or higher)
- MongoDB
- npm or yarn

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
PORT=5000
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

#### POST /api/login

Authenticate and receive a JWT token.

Request body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

Response:

```json
{
  "token": "your_jwt_token"
}
```

### Data Operations

All data operations require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

#### GET /api/data

Retrieve all data entries.

Response:

```json
[
  {
    "_id": "document_id",
    "data": {
      // CSV data fields
    },
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
]
```

#### POST /api/upload

Upload and process a CSV file.

Request:

- Method: POST
- Headers:
  - Authorization: Bearer your_jwt_token
  - Content-Type: multipart/form-data
- Body:
  - file: CSV file

Response:

```json
{
  "message": "File processed successfully",
  "count": number_of_records_processed
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200: Successful operation
- 400: Bad request (e.g., missing file)
- 401: Authentication required
- 403: Invalid token
- 500: Server error

## Security Features

- JWT-based authentication
- Protected routes requiring valid tokens
- Token expiration (1 hour)
- Secure file upload handling
- Environment variable configuration




