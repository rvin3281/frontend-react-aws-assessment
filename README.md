# Assessment

## Frontend

This assessment is the frontend for a mini full-stack web application. It is developed using React 18 and Vite as the build tool.

### Key Features

1. **CRUD Operations**: The frontend supports all four major CRUD operations (Create, Read, Update, Delete).

2. **Main Pages**:

   - **EditUser**: Page to edit user details.
   - **Home**: The home page to add new user.
   - **Login**: User login Page.
   - **Register**: User registration Page.
   - **View All User**: Page to view all user.

3. **State Management**: Redux is used as the global state management system to handle application-wide state variables.

4. **Styling**: The frontend is designed with pure CSS, utilizing Grid and Flexbox layouts for responsive design.

5. **Pagination**: The application includes pagination.

6. **Caching**: React Query is used to efficiently cache data and reduce server requests.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**: Use Git to clone the project to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Install Dependencies: Install project dependencies using your preferred package manager.

- **npm install**

3. Run the Application: Start the development server.

- **npm run dev**

4. API Communication: The frontend uses Axios to communicate with the backend API. Ensure that the API server is up and running.
