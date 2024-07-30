# Expense Sharing Application

## Setup Instructions

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Create a `.env` file and add the following environment variables:
    - MYSQL_DATABASE
    - MYSQL_USER
    - MYSQL_PASSWORD
    - MYSQL_HOST
5. Run `npm start` to start the server

## API Endpoints

### User Endpoints
- POST /api/users: Create a new user
- GET /api/users/:id: Retrieve user details

### Expense Endpoints
- POST /api/expenses: Add a new expense
- GET /api/expenses/user/:userId: Retrieve expenses for a specific user
- GET /api/expenses: Retrieve all expenses
# Expense Sharing App

## Description
A web application for managing and sharing expenses.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
