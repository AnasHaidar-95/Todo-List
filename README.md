# Todo-List

A full-stack to-do list application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).


## Features

- **Create, Read, Update, and Delete (CRUD)** operations for to-do items.
- **User-friendly interface** with a clean and modern design.
- **Dark mode** for better visibility in low-light environments.
- **Responsive design** that works on all devices.
- **Real-time updates** with instant feedback on all actions.

## Tech Stack

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Query**: A library for fetching, caching, and updating data in React applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Framer Motion**: A library for creating animations in React.
- **Vite**: A fast build tool for modern web projects.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, and minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing and retrieving data.
- **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Helmet**: A middleware for securing Express applications by setting various HTTP headers.
- **CORS**: A middleware for enabling Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (local or remote instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AnasHaidar-95/Todo-List.git
   cd Todo-List
   ```

2. **Install backend dependencies:**

   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../Frontend
   npm install
   ```

4. **Set up environment variables:**

   - In the `Backend` directory, create a `.env` file and add the following:

     ```
     PORT=2500
     DB_URL=your-mongodb-connection-string
     CORS_ORIGIN=http://localhost:5173
     ```

   - In the `Frontend` directory, create a `.env` file and add the following:

     ```
     VITE_API_BASE_URL=http://localhost:5173/api
     ```

5. **Start the backend server:**

   ```bash
   cd ../Backend
   npm start
   ```

6. **Start the frontend development server:**

   ```bash
   cd ../Frontend
   npm run dev
   ```

## Project Structure

The project is organized into two main directories: `Frontend` and `Backend`.

### Frontend

```
Frontend/
├── src/
│   ├── api/
│   │   └── todos.api.js
│   ├── features/
│   │   └── todos/
│   │       ├── components/
│   │       │   ├── TodoItem.jsx
│   │       │   └── TodoList.jsx
│   │       └── hooks/
│   │           └── useTodos.js
│   ├── lib/
│   │   ├── axios.js
│   │   └── useTheme.js
│   ├── ui/
│   │   ├── Error.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   └── main.jsx
└── ...
```

### Backend

```
Backend/
├── src/
│   ├── controllers/
│   │   └── todo.controller.js
│   ├── middleware/
│   │   ├── error.middleware.js
│   │   └── validate.middleware.js
│   ├── models/
│   │   └── todo.model.js
│   ├── routes/
│   │   └── todo.routes.js
│   ├── schemas/
│   │   └── todo.schema.js
│   ├── services/
│   │   └── todo.service.js
│   └── utils/
│       ├── ApiError.js
│       └── asyncHandler.js
├── app.js
└── server.js
```

## API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| `POST` | `/api/todos`  | Create a new to-do item    |
| `GET`  | `/api/todos`  | Get all to-do items        |
| `GET`  | `/api/todos/:id` | Get a single to-do item    |
| `PATCH`| `/api/todos/:id` | Update a to-do item        |
| `DELETE`| `/api/todos/:id` | Delete a to-do item        |


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
