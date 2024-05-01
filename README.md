# To-Do List Application
This is a simple web application for creating and managing a personal to-do list. Users can log in with given credentials and perform CRUD operations on tasks in the to-do list. Also, the application persists data even after refreshing the page.

# Features

**User authentication:** Users can log in with the given credentials and log out.

**Task management:**
  1. Users can create new tasks with a title and description.
  2. Users can mark tasks as completed or uncompleted.
  3. Users can edit the title and description of tasks.
  4. Users can delete tasks.
  5. The application persists data even after refreshing the page.
  6. Implemented a simple UI for displaying and interacting with tasks.

# Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Authentication: JSON Web Tokens (JWT)

# Getting Started

**1. Clone the repository:**

   git clone https://github.com/riya-1701/TO-DO-LIST.git

**2. Install Dependencies**

cd todo-list
npm install

**3. Set up environment variables: Create a .env file in the root directory and add the following:**

JWT_SECRET_KEY=your_secret_key

**4. Start the server:**

cd api
npm start

**5. Open your browser and go to http://localhost:5000 to use the application.**

# Folder Structure

API: Contains backend logic and routes for handling user authentication and task management.
utils: Contains utility functions, such as middleware for verifying JWT tokens.
db: Contains database configuration and connection setup.

# Contributor

Riya Srivastava
