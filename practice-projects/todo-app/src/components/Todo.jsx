import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(""); // Input value
  // Initialize from local storage immediately
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }); // Lists of todos

  // Load todos from localStorage on first render

  // Save todos into localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //Function to add todo
  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Todo is required");
      return;
    }
    const newTodo = { id: Date.now(), text: todo };
    // update the state
    setTodos([...todos, newTodo]);
    console.log(todos);
    // Clear
    setTodo("");
  };

  // Delete handler
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h1>My To-Do List</h1>
      <form onSubmit={handleAdd}>
        <input
          style={{ padding: "8px", width: "70%" }}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <button
          style={{ padding: "8px 12px", marginLeft: "10px", marginTop: "10px" }}
        >
          Add Todo
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: "0px", marginTop: "1.5rem" }}>
        {todos.map((todo) => {
          return (
            <li
              style={{
                background: "#f5f5f5",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "4px",
              }}
              key={todo.id}
            >
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
