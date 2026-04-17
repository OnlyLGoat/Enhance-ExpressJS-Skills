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

### 🔹 Advanced Patterns & Microservices
- **Microservices Architecture**: Orchestrating multiple independent services (User, Costume, Note, Product) as part of a distributed system.
- **Role-Based Access Control (RBAC)**: Implementing granular permissions for different user roles (e.g., Styliste, Jury) within middleware.
- **Stateless Auth Patterns**: Implementation of JWT-protected routes across cross-service communication.
- **Security Middleware**: Custom implementation of role-verification and token-validation layers.

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
├── 00_Some_Exercices/            # Practice, Evaluations & Microservices
│   ├── Gestion de defiles/       # Fashion Show System (Multi-service)
│   ├── JWT Middleware 01/        # Distributed JWT & Business Logic
│   └── CC1_Exercices/            # Evaluation tasks and CC1 practices
├── 01_Basics/                    # Core fundamentals and routing
├── 02_Database_Integration/      # MongoDB & Mongoose integration
├── 03_Authentication_Patterns/   # Advanced Security & Auth
│   ├── JWT Authentication/       # JSON Web Token implementation
│   └── Exercice/                 # Hands-on practice
└── README.md                     # Central documentation
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
   cd "01_Basics" # OR "02_Database_Integration" OR "03_Authentication_Patterns/JWT Authentication"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (Dev mode):
   ```bash
   npm run devStart # Or the script defined in package.json
   ```

## 🧩 Running Microservices Practice

For exercises in `00_Some_Exercices` (like *Gestion de defiles*), you may need to run multiple services simultaneously to test inter-service communication and auth patterns:

1. **Auth/User Service**: Handles login and token generation.
2. **Business Services**: (e.g., Note, Costume) Require valid tokens from the user service.

**Tip:** Use multiple terminal tabs or a tool like `concurrently` to manage multiple running processes. Ensure your MongoDB instance is running before starting the services.

## 📈 Learning Roadmap

- [x] Basic Server Setup
- [x] Route Handlers & HTTP Methods
- [x] Advanced Routing with `express.Router`
- [x] Middleware & `router.param`
- [x] EJS View Engine Integration
- [x] Static File Serving
- [x] Form Handling & Body Parsing
- [x] Database Integration with MongoDB/Mongoose
- [x] JWT Authentication Patterns
- [x] Microservices Architecture Basics
- [x] Role-Based Access Control (RBAC)
- [/] API Versioning & Documentation (Swagger)
- [ ] Deployment & CI/CD (GitHub Actions/Render)
- [ ] Complex Microservices Inter-communication

---
**Maintained by**: OnlyLGoat
