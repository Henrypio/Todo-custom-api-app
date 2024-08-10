
# Todo Custom API App

This is a Todo application built with Next.js, Redux, and a custom API. The application allows users to add, view, edit, and delete todo items. It uses a custom API to handle CRUD operations for todos.

## Features

- Add new todos
- View the list of todos
- Edit existing todos
- Delete todos
- Responsive and user-friendly design

## Technologies Used

- **Next.js**: Framework for React applications
- **Redux**: For state management
- **Axios**: HTTP client for making API requests.
- **Tailwind CSS**: For styling
- **Client-side Rendering**: The application uses client-side rendering for displaying content.
- **Custom API**: For handling todo operations

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
  

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## API Endpoints

### Todos

- **GET** `/api/todos` - Fetch all todos
- **POST** `/api/todos` - Add a new todo
- **GET** `/api/todos/[id]` - Fetch a single todo by ID
- **PUT** `/api/todos/[id]` - Update a todo by ID
- **DELETE** `/api/todos/[id]` - Delete a todo by ID

## Vercel Deployment

The application is deployed on Vercel. You can access the live app using the following links:

- [Live App](https://todo-custom-api-app.vercel.app)
- [Preview Link](https://todo-custom-api-app-henry-s-projects-59f57949.vercel.app)
- [Git Main Branch Preview](https://todo-custom-api-app-git-main-henry-s-projects-59f57949.vercel.app)

## Usage

- **Homepage**: Displays the list of todos and provides a link to add new todos.
- **Add  Todo**: Allows users to add a new todo item.
- **View Todo**: Displays details of a single todo item.
- **Edit Todo**: Allows users to edit an existing todo item.
-**Delete Todo**: Allows users to delete an existing todo item

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!
