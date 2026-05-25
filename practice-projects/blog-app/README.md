# Blog App

A modern, responsive blog application built with **React** and **Vite**. This project demonstrates dynamic routing, component-based architecture, and centralized data management.

## 🚀 Features

- **Dynamic Routing:** Seamless navigation between home, blog posts, and error pages using React Router.
- **Component-Based UI:** Modular and reusable components for a maintainable codebase.
- **Clean Styling:** Optimized CSS for a professional look and feel.
- **Fast Performance:** Powered by Vite for lightning-fast development and builds.

## 📁 Project Structure

The codebase is organized into logical directories for scalability:

```text
blog-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # UI Components
│   │   ├── Home.jsx         # Landing page showing blog feed
│   │   ├── PostDetails.jsx  # Individual blog post view
│   │   ├── PostLayout.jsx   # Shared layout for post-related pages
│   │   └── NotFound.jsx     # 404 Error page
│   ├── App.jsx          # Main application component & routes
│   ├── App.css          # Global styles for App
│   ├── data.js          # Centralized data store for blog posts
│   ├── index.css        # Base styles and resets
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** React Router
- **Styling:** CSS

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krrish-kohli/React.git
   ```
2. Navigate to the project directory:
   ```bash
   cd practice-projects/blog-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production-ready build:
```bash
npm run build
```

---
*Created by [krrish-kohli](https://github.com/krrish-kohli)*
