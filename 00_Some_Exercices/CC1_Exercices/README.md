# CC1 Exercices: ExpressJS & MongoDB

Welcome to the **CC1 Exercices** repository! This collection is designed to help you master ExpressJS, database integration with Mongoose, and advanced authentication patterns.

---

## 📂 Repository Structure

The exercises are organized into three main directories, each focusing on specific concepts:

### 1. [Exercice01](./Exercice01) - Course Management
- **Topic**: Basic CRUD operations.
- **Model**: `Course` (code_cours, nom, date_creation).
- **Database**: `courseDB`.
- **Key Features**: Adding a course, getting course details by code, and deleting a course.

### 2. [Exercice02](./Exercice02) - Product Management
- **Topic**: CRUD operations and data validation.
- **Model**: `Produits` (code_produit, nom, prix, date_creation).
- **Database**: `ex02produitDB`.
- **Key Features**: Product creation, retrieval, and deletion.

### 3. [Exercice03_Hard](./Exercice03_Hard) - Authentication & Security
- **Topic**: Advanced patterns, JWT, and Password Hashing.
- **Model**: `Users` (email, password, role, date_creation).
- **Database**: `Ex03Hard`.
- **Middleware**: Custom authentication middleware for token verification.
- **Key Features**: User registration with Bcrypt hashing, login with JWT generation, and protected profile route.

---

## 🛠️ Technologies Used

- **Node.js**: Server-side runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Bcrypt.js**: Library for hashing and salting passwords.
- **JSONWebToken (JWT)**: Standard for securely transmitting information between parties.
- **Nodemon**: Development tool for automatic server restarts.

---

## ⚙️ Prerequisites

Ensure you have the following installed before running any of the exercises:
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Running locally at `mongodb://127.0.0.1/`)

---

## 📥 Installation

Each exercise directory contains its own `package.json`. To set up an exercise:

1. Navigate to the desired directory (e.g., `Exercice03_Hard`):
   ```bash
   cd Exercice01  # or Exercice02, Exercice03_Hard
   ```
2. Install the specific dependencies:
   ```bash
   npm install
   ```

---

## 🏃 Running an Exercise

To start a server, use the `npm start` command (which runs `nodemon`):
```bash
npm start
```
The servers for all exercises are configured to run on port `3001` by default.

---

## 卫星 API Endpoints Cheat Sheet

### Exercice 01 & 02 (CRUD)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/cours` or `/produit` | Create a new record |
| `GET` | `/cours/:code` or `/produit/:code` | Retrieve a record by its identifier |
| `DELETE` | `/cours/:code` or `/produit/:code` | Delete a record by its identifier |

### Exercice 03 (Hard - Auth)
| Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Public | Register a new user |
| `POST` | `/auth/login` | Public | Login and receive a JWT |
| `GET` | `/profil` | Protected (JWT) | Access user profile data |

---

> [!TIP]
> Use tools like **Postman** or **Insomnia** to test these endpoints. For protected routes in Exercice 03, remember to include the `Authorization: Bearer <your_token>` header.
