# MERN Data Manager

A full-stack MERN (MongoDB, Express.js, React, Node.js) application with JWT authentication that allows users to upload and view CSV data.

## Features

- JWT Authentication
- CSV file upload
- Dynamic data table display
- Clean and responsive UI
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a remote instance)
- npm or yarn package manager

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd devil-mern
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devil-mern
JWT_SECRET=your-super-secret-jwt-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

## Running the Application

1. Start the backend server:

```bash
npm run dev
```

2. In a separate terminal, start the frontend development server:

```bash
cd client
npm start
```

3. Access the application at `http://localhost:3000`

## Default Login Credentials

- Username: admin
- Password: admin123

## Usage

1. Log in using the default credentials
2. Upload a CSV file using the upload button
3. View the data in the table format
4. Use the logout button to end your session

## API Endpoints

- POST `/api/login` - Authenticate user and get JWT token
- GET `/api/data` - Get all data (requires authentication)
- POST `/api/upload` - Upload CSV file (requires authentication)

## Technologies Used

- Backend:

  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Multer for file upload
  - CSV-parser for CSV processing

- Frontend:
  - React with TypeScript
  - Axios for API calls
  - CSS Modules for styling

## License

MIT
