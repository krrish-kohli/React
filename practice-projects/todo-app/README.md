# 📝 Todo App

A streamlined, persistent task management application built with React and Vite. This project demonstrates state-driven UI updates and client-side data persistence.

## 🚀 Features

- **Add/Remove Tasks**: Easily manage your daily to-dos.
- **Persistence**: Tasks are saved to `localStorage`, so your list remains intact even after a page refresh.
- **Responsive Design**: A clean, mobile-friendly interface.
- **State Management**: Leverages React's `useState` and `useEffect` hooks for efficient UI synchronization.

## 📁 Project Structure

```text
todo-app/
├── public/                # Static assets
├── src/
│   ├── components/
│   │   └── Todo.jsx       # Main Todo component logic
│   ├── App.jsx            # Root component
│   ├── App.css            # Component-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - Modern component-based UI library.
- [Vite](https://vitejs.dev/) - Ultra-fast build tool for a smooth development experience.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Custom styling for a polished look.

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krrish-kohli/React.git
   ```
2. Navigate to the project directory:
   ```bash
   cd practice-projects/todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.
