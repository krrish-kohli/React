# 📝 Forms Demo

An in-depth exploration of handling user input and form submissions in React, comparing controlled and uncontrolled components. This project covers various patterns for data binding, validation, and managing complex form states.

## 🚀 Features
- **Controlled Components**: Synchronizing form inputs with React state for a single source of truth.
- **Form Validation**: Implementing real-time feedback and error handling for user inputs.
- **Handling Multiple Inputs**: Using a single change handler function to manage complex forms with many fields.
- **Form Submission**: Processing user data, implementing `onSubmit` handlers, and preventing default browser behavior.

## 📁 Project Structure
```text
forms-demo/
├── src/
│   ├── components/
│   │   ├── SimpleForm.jsx
│   │   ├── ValidationForm.jsx
│   │   └── MultiInputForm.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🛠️ Tech Stack
- **React** (Vite)

## 🎯 Learning Objectives
- Differentiate between controlled and uncontrolled inputs in React.
- Implement robust client-side form validation logic.
- Manage complex form states using state objects and dynamic keys.
- Understand the integration of `onChange` and `onSubmit` events.

## 🏗️ Architectural Structures
The project demonstrates modular form components. Each component illustrates a specific concept: `SimpleForm` for basic binding, and `MultiInputForm` for scalable state management where input names match state keys.

## 💡 Technical Code Highlights
### Controlled Input Pattern
```jsx
// SimpleForm.jsx
const [name, setName] = useState('');
const handleChange = (e) => setName(e.target.value);

return <input value={name} onChange={handleChange} />;
```
### Generic Change Handler for Objects
```jsx
// MultiInputForm.jsx
const [formData, setFormData] = useState({ email: '', password: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```
