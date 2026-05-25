# 🔀 Conditionals Rendering

A detailed guide on implementing conditional logic within React components to render UI elements dynamically based on state or props. This project explores the best practices for handling diverse application states seamlessly.

## 🚀 Features
- **If-Else Logic**: Implementing traditional JavaScript conditional statements for complex rendering branches.
- **Ternary Operators**: Utilizing concise inline conditional logic for simple UI toggles.
- **Logical AND (&&)**: Efficiently rendering components only when specific criteria are met.
- **Switch Statements**: Managing multiple mutually exclusive rendering paths for clean and readable code.

## 📁 Project Structure
```text
conditionals-rendering/
├── src/
│   ├── components/
│   │   ├── UserGreeting.jsx
│   │   ├── LoginControl.jsx
│   │   └── NotificationBanner.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)

## 🎯 Learning Objectives
- Master the various patterns for conditional rendering in functional React components.
- Understand the appropriate use cases for ternary operators versus logical AND.
- Learn to manage complex UI states such as Loading, Error, and Success indicators.
- Implement dynamic component switching based on user authentication and permissions.

## 🏗️ Architectural Structures
The project demonstrates how to decouple business logic from UI presentation. The `App.jsx` component manages the global state, while specialized sub-components like `LoginControl` handle the localized rendering logic to show specific buttons based on the user's logged-in status.

## 💡 Technical Code Highlights
### Ternary Operator Pattern
```jsx
// LoginControl.jsx
{isLoggedIn ? (
  <LogoutButton onClick={handleLogout} />
) : (
  <LoginButton onClick={handleLogin} />
)}
```
### Logical AND Pattern
```jsx
// NotificationBanner.jsx
{unreadMessages.length > 0 && (
  <div className="banner">
    <h2>You have {unreadMessages.length} unread messages.</h2>
  </div>
)}
```
