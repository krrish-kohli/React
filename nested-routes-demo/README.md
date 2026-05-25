# 🔀 Nested Routes Demo

A comprehensive demonstration of nested routing in React using React Router. This project illustrates how to manage complex navigation structures where child components are rendered within parent layouts.

## 🚀 Features
- **Hierarchical Routing**: Implementing parent and child routes using a centralized configuration.
- **Dynamic Navigation**: Using `Link` and `NavLink` for seamless client-side transitions.
- **Shared Layouts**: Leveraging the `Outlet` component to render sub-pages within a persistent dashboard interface.
- **Active State Management**: Highlighting current routes for better user experience.

## 📁 Project Structure
```text
nested-routes-demo/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Settings.jsx
│   │   └── Profile.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)
- **React Router Dom** (v6+)

## 🎯 Learning Objectives
- Master the use of the `<Outlet />` component for rendering nested content.
- Learn to configure nested route definitions in a declarative way within `App.jsx`.
- Understand how to maintain persistent UI elements (like sidebars) across sub-routes.
- Explore programmatic navigation and dynamic segment matching.

## 🏗️ Architectural Structures
The application follows a layout-centric architecture. The `App` component acts as the main entry point, defining the route hierarchy. The `Dashboard` component serves as a layout wrapper, providing a consistent sidebar and header, while using `<Outlet />` as a placeholder for child routes like `Profile` and `Settings`.

## 💡 Technical Code Highlights
### Nested Route Configuration
```jsx
// App.jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```
### Layout Rendering with Outlet
```jsx
// Dashboard.jsx
const Dashboard = () => (
  <div className="dashboard-container">
    <aside><nav>...</nav></aside>
    <main>
      <Outlet /> {/* Child routes render here */}
    </main>
  </div>
);
```
