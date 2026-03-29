# 🚀 ExpressJS Mastery Course

Welcome to my ExpressJS learning repository! This project documents my journey through mastering ExpressJS, the most popular Node.js web server framework. This repository serves as a hands-on guide covering everything from basic routing to advanced middleware and view engines.

## 🛠 Features & Learning Points

- **Express Server Setup**: Core fundamentals of initializing and running an Express application.
- **RESTful Routing**: Implementation of various HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- **Dynamic Routing**: Using `express.Router` for modular and scalable route management.
- **Middleware Integration**: 
    - **Global Middleware**: Using `app.use()` for application-wide logic.
    - **Custom Middleware**: Implementation of custom loggers to track requests.
    - **Built-in Middleware**: Utilizing `express.json()` and `express.urlencoded()` for body parsing.
- **Static File Serving**: Serving client-side assets (HTML, CSS, JS) from the `public` directory using `express.static`.
- **Form Handling**: 
    - Rendering forms with EJS.
    - Processing `POST` data and handling form submissions.
    - Managing redirections with `res.redirect`.
- **Query Parameters**: Accessing and utilizing URL search parameters via `req.query`.
- **View Engines (EJS)**: Rendering dynamic HTML content using Embedded JavaScript templates.
- **Modern Paradigms**: Exploring modern ExpressJS 5.x features and best practices.

## 📂 Project Structure

```bash
├── public/             # Static files (index.html, test.html)
├── routes/             # Modular route handlers (e.g., users.js)
├── views/              # EJS templates
│   └── users/          # Domain-specific views (e.g., new.ejs)
├── index.js            # Main entry point for the Express server
├── package.json        # Project metadata and dependencies
└── README.md           # Professional project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OnlyLGoat/Enhance-ExpressJS-Skills.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ExpressJS
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the server in development mode with auto-reload:
```bash
npm run devStart
```
The server will be available at `http://localhost:3500`.

## 📈 Learning Roadmap

- [x] Basic Server Setup
- [x] Route Handlers & HTTP Methods
- [x] Advanced Routing with `express.Router`
- [x] Middleware & `router.param`
- [x] EJS View Engine Integration
- [x] Static File Serving
- [x] Form Handling & Body Parsing
- [x] Query Parameters & Redirection
- [ ] Advanced Authentication Patterns (Next Step)
- [ ] Database Integration with MongoDB/PostgreSQL (Planned)

## 🤝 Contribution

Feel free to explore the code! This is a personal learning project, but feedback and suggestions are always welcome.

---
**Maintained by**: OnlyLGoat
**Inspired by**: Web Dev Simplified ExpressJS Guide