# 🔐 JWT Authentication Pattern

This module implements a secure authentication system using **JSON Web Tokens (JWT)** and **bcrypt** for password hashing. It demonstrates the core patterns for modern web security in ExpressJS.

## 🚀 Features

- **User Registration**: Securely hash passwords using `bcrypt` before storing them in MongoDB.
- **Secure Login**: Verify credentials and generate persistent session tokens.
- **JWT Signing**: Generate signed tokens with a secret key and expiration time.
- **Database Integration**: Persistent user storage using Mongoose and MongoDB.

## 🛠 Technologies Used

- **ExpressJS**: Fast, unopinionated, minimalist web framework.
- **Mongoose**: Elegant mongodb object modeling for node.js.
- **Bcrypt**: A library to help you hash passwords.
- **Jsonwebtoken**: An implementation of JSON Web Tokens.
- **Nodemon**: For automatic server restarts during development.

## 📂 Project Structure

```bash
.
├── database/            # Mongoose models and connection
│   └── utilisateur.js   # User schema definition
├── index.js             # Main server logic and Auth routes
├── package.json         # Module dependencies and scripts
└── README.md            # Module documentation
```

## 🚥 Getting Started

### Prerequisites

- MongoDB running locally or a MongoDB Atlas connection string.
- Node.js and npm installed.

### Installation

1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## 🛡 API Endpoints

| Method | Endpoint    | Description                     |
|--------|-------------|---------------------------------|
| POST   | `/register` | Register a new user             |
| POST   | `/login`    | Login and receive a JWT token   |

---
*Part of the ExpressJS Mastery Course.*
