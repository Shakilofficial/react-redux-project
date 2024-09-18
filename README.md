# React - Redux Blog Project

![Cover Image](https://github.com/Shakilofficial/react-redux-project/blob/1efc9fa39665ef7b9e6150ef10cff229d69a90d0/blog-cover.png)

## Features Overview

### 1. Initial Blog Display and Sorting

- **Sequential Display**:

  - Blogs are displayed in the order they are received from the API.

- **Sorting Options**:
  - Sort blogs by:
    - **Newest**: Most recent publish dates first.
    - **Most Liked**: Highest number of likes first.

### 2. Liking and Saving Blogs

- **Incrementing Likes**:

  - Increase likes with a button click; synchronized with the server.

- **No Authentication**:

  - Users can like posts without restrictions.

- **Saving Blogs**:

  - Save blogs for later viewing.

- **Saved Blogs Section**:
  - View all saved blogs in a dedicated section.

### 3. Routing and Navigation

- **React Router**:

  - Navigate between the blog list page and individual blog detail pages.

- **Direct Access**:
  - Access blog detail pages via URL.

### 4. Blog Detail Page

- **Save Button**:

  - Toggle between "Save" and "Saved" with visual indication.

- **Related Blogs**:

  - Display related blogs based on tags.

- **Self-Exclusion**:
  - Exclude the current blog from the "Related Blogs" section.

---

## Technologies Used

- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Tools for state management.
- **[React Router](https://reactrouter.com/)**: Library for routing in React applications.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Axios](https://axios-http.com/)**: HTTP client for API requests.
- **[JSON Server](https://github.com/typicode/json-server)**: Tool for creating a REST API with JSON data.
- **[FontAwesome](https://fontawesome.com/)**: Icon toolkit for adding icons.

---

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Shakilofficial/react-redux-project.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd react-redux-project
   ```

3. **Run the Server**:

   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install server dependencies and start the server:
     ```bash
     npm install
     npm start
     ```
   - The server will run at `http://localhost:9000`.

4. **Run the Frontend**:

   - Open a new terminal and navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies and start the development server:
     ```bash
     npm install
     npm run dev
     ```
   - The frontend will run at `http://localhost:5173`.

5. **Access the Application**:
   - Open `http://localhost:5173` in your browser to view the application.

---

## API Integration

- The application uses a JSON server running at `http://localhost:9000`.
- **Endpoints**:
  - **Blogs**: `http://localhost:9000/blogs`
  - **Individual Blog**: `http://localhost:9000/blogs/:id`

---

### Contributing

Feel free to open issues or submit pull requests to enhance the functionality of the app. Please ensure that your code adheres to the existing style and includes appropriate tests.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

For any questions or feedback, please reach out to mrshakilhossain@outlook.com

©️ Md Shakil Hossain ~ 2024

---
