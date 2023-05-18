# z-platform

<!-- ZPlatform is a user management platform for ease on-boarding for new users -->

This is the backend server for ZPlatform, an online service platform. It provides user account management features such as user registration, login, profile management, account verification, and password reset. The backend is built with Node.js, Express.js, and PostgreSQL database.

## Installation

Clone the repository: `git clone https://github.com/your/repository.git`

Navigate to the project directory: `cd zplatform-backend`

Install dependencies: `npm install`

## Configuration

Rename the `.env.example` file to `.env`.

Set the necessary environment variables in the `.env` file, including the database connection details, secret keys, and other configuration settings.

## Database Setup

Create a PostgreSQL database for the project.
Update the `.env` file with the correct database credentials.

## Running the Server

To start the server, run the following command:
`npm start`

The server will start running on http://localhost:3000.

## API Endpoints

### Authentication

`POST /auth/signup` - User registration endpoint. Creates a new user account.

`POST /auth/login` - User login endpoint. Generates an access token upon successful login.

`POST /auth/logout` - User logout endpoint. Performs necessary logout actions.

`POST /auth/reset-password` - Password reset endpoint. Initiates the password reset process.

`GET /auth/verify-login/:token` - Login verification endpoint. Logs the user in when the login link is clicked.

`POST /profile/update` - User profile update endpoint. Updates the user's profile information.

### Verification

`POST /verification/request` - Account verification request endpoint. Initiates the account verification process.

`POST /verification/approve` - Account verification callback endpoint. This is called to confirm account verification.

`GET /verification` - Retrieves user's information about account status. Whether it is verified, pending or unverified

That's it! You have successfully set up and configured the backend for ZPlatform. You can now use the provided API endpoints to interact with the system.
