# 🚀 ExpressJS Mastery Course

Welcome to my ExpressJS learning repository! This project documents my journey through mastering ExpressJS, the most popular Node.js web server framework. This repository serves as a hands-on guide covering everything from basic routing to advanced database integration.

## 🛠 Features & Learning Points

### 🔹 ExpressJS Basics
- **Express Server Setup**: Core fundamentals of initializing and running an Express application.
- **RESTful Routing**: Implementation of various HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- **Dynamic Routing**: Using `express.Router` for modular and scalable route management.
- **Middleware Integration**: 
    - **Global Middleware**: Using `app.use()` for application-wide logic.
    - **Custom Middleware**: Implementation of custom loggers to track requests.
    - **Built-in Middleware**: Utilizing `express.json()` and `express.urlencoded()` for body parsing.
- **Static File Serving**: Serving client-side assets (HTML, CSS, JS).
- **View Engines (EJS)**: Rendering dynamic HTML content using Embedded JavaScript templates.

### 🔹 Database Integration (MongoDB & Mongoose)
- **Database Connection**: Establishing a secure connection to MongoDB using Mongoose.
- **Schema & Models**: Defining data structures with Mongoose schemas for consistent data handling.
- **CRUD Operations**: Complete implementation of Create, Read, Update, and Delete logic for database records.
- **Async/Await**: Utilizing modern JavaScript asynchronous patterns for non-blocking database interactions.
- **Error Handling**: Robust error management for database queries and server responses.

## 📂 Project Structure

The repository is organized into distinct modules, each focusing on a specific area of ExpressJS:

```bash
.
├── ExpressJS Basics/             # Core fundamentals and routing
│   ├── public/                   # Static files
│   ├── routes/                   # Modular route handlers
│   ├── views/                    # EJS templates
│   ├── index.js                  # Module entry point
│   └── package.json              # Module dependencies
├── ExpressJS Database Integration/ # MongoDB & Mongoose integration
│   ├── db.js                     # Database connection and models
│   ├── index.js                  # Main server with CRUD routes
│   └── package.json              # Module dependencies
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas)
- [npm](https://www.npmjs.com/)

### Installation & Running

Each module is independent. To run a specific module:

1. Navigate to the module directory:
   ```bash
   cd "ExpressJS Basics" # OR "ExpressJS Database Integration"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (Dev mode):
   ```bash
   npm run devStart # Basics
   # OR
   npm run DevStart # Database Integration
   ```

## 📈 Learning Roadmap

- [x] Basic Server Setup
- [x] Route Handlers & HTTP Methods
- [x] Advanced Routing with `express.Router`
- [x] Middleware & `router.param`
- [x] EJS View Engine Integration
- [x] Static File Serving
- [x] Form Handling & Body Parsing
- [x] Database Integration with MongoDB/Mongoose (Current)
- [ ] Advanced Authentication Patterns (JWT/Passport)
- [ ] API Versioning & Documentation (Swagger)
- [ ] Deployment & CI/CD

---
**Maintained by**: OnlyLGoat
