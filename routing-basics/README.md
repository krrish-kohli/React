# 🚦 Routing Basics

A foundational project exploring the core concepts of client-side routing in React application using the `react-router-dom` library.

## 🚀 Features
- **Basic Route Definition**: Mapping URLs to specific components.
- **Link Components**: Using `<Link>` for navigation without page reloads.
- **Dynamic Routing**: Handling dynamic path segments (parameters).
- **Navigation Menu**: A persistent navigation bar across different views.

## 📁 Project Structure
```text
routing-basics/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)
- **React Router Dom**

## 🎯 Learning Objectives
- Initialize a Router in a React application.
- Define routes using `BrowserRouter`, `Routes`, and `Route`.
- Implement declarative navigation with the `Link` component.
- Differentiate between client-side routing and server-side routing.

## 🏗️ Architectural Structures
The application uses a flat component structure where `App.jsx` serves as the routing hub. `Navbar` is rendered outside the `Routes` container to remain visible on all pages, while `Home`, `About`, and `Contact` are conditionally rendered based on the URL path.

## 💡 Technical Code Highlights
### Router Setup
```jsx
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```
### Declarative Navigation
```jsx
// Navbar.jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
```
