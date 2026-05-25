# 🎁 Props Practice

A hands-on exploration of data flow in React using `props`. This project demonstrates how to pass data and functions from parent to child components to build modular and reusable UIs.

## 🚀 Features
- **Data Passing**: Transferring strings, numbers, and objects from parent to children.
- **Component Reusability**: Creating generic components (like `Card` or `Button`) that change behavior based on props.
- **Callback Props**: Passing functions as props to allow children to communicate with parents.
- **Default Props**: Handling missing data gracefully with default values.

## 📁 Project Structure
```text
props-practice/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   └── UserProfile.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)

## 🎯 Learning Objectives
- Master the unidirectional data flow pattern in React.
- Understand the "props are read-only" principle.
- Implement reusable UI patterns using functional components and props.
- Use destructuring for cleaner prop handling.

## 🏗️ Architectural Structures
The project follows a hierarchical component structure. `App.jsx` serves as the data source (orchestrator), passing specific data slices to presentation components like `Card.jsx`. This separation ensures that logic and styling remain organized.

## 💡 Technical Code Highlights
### Prop Destructuring
```jsx
// Card.jsx
const Card = ({ title, description, image }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
```
### Callback Pattern
```jsx
// App.jsx
const handleDelete = (id) => console.log('Deleting', id);
return <Child onDelete={() => handleDelete(item.id)} />;
```
