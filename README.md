# Profession Management App

A simple React application to add, view, and remove employee records.

This project is built with React and Vite and is designed to manage basic employee details such as:

- Name
- Profession
- Age

## Features

- Add a new employee using a form
- Show validation error if required fields are missing
- Display a success message after adding an employee
- View all added employees in a clean list
- Delete any employee record

## Tech Stack

- React
- Vite
- CSS

## Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint checks

## Current Behavior

- Employee data is stored in React state
- Data is not saved after page refresh
- The interface is styled with simple custom CSS

## Future Improvements

- Add local storage support
- Improve form validation logic
- Edit existing employee records
- Add search or filter functionality

## Author

Created as a basic profession and employee management practice project.
