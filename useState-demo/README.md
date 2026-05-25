# 🔢 useState Demo

A comprehensive guide to managing local state in functional components using the `useState` hook. This project demonstrates various patterns for state initialization, updates, and complex state management.

## 🚀 Features
- **Counter Implementation**: Incrementing and decrementing numerical state with boundary checks.
- **Boolean Toggles**: Switching visibility, themes, or states using boolean logic.
- **Object State Management**: Handling multiple related values in a single state object.
- **Functional Updates**: Utilizing the updater function pattern for reliable state transitions based on previous state.

## 📁 Project Structure
```text
useState-demo/
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── ToggleText.jsx
│   │   └── ProfileEditor.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)

## 🎯 Learning Objectives
- Initialize state correctly with the `useState` hook.
- Understand how React schedules state updates and re-renders.
- Master the functional update pattern (`setCount(prev => prev + 1)`) to avoid race conditions.
- Learn the "spread operator" pattern for updating specific properties in state objects.

## 🏗️ Architectural Structures
The application showcases modular components that encapsulate specific stateful logic. `Counter.jsx` focuses on simple primitives, while `ProfileEditor.jsx` demonstrates managing an object-based state where users can edit multiple fields.

## 💡 Technical Code Highlights
### Simple State with Functional Updates
```jsx
// Counter.jsx
const [count, setCount] = useState(0);
const increment = () => setCount(prevCount => prevCount + 1);
```
### Managing Object State
```jsx
// ProfileEditor.jsx
const [profile, setProfile] = useState({ name: 'Guest', bio: '' });
const updateBio = (newBio) => setProfile(prev => ({ ...prev, bio: newBio }));
```
