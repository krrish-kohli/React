import Card from "./components/Card";

const App = () => {
  const donateFn = () => {
    alert("Thank you for your donating!");
  };
  return (
    <div>
      <Card>
        <h2>Hello, Ella</h2>
        <p>Welcome to JavaScript</p>
      </Card>
      <Card>
        <h2>Hello, Smith</h2>
        <p>Welcome to NodeJS</p>
      </Card>
    </div>
  );
};

export default App;

// !====State & Events====

// *===Event Types===
// onClick - when user clicks

// onChange- when input value changes

// onMouseOver - when user hovers

// onSubmit - when a form is submitted

// !====What Are Hooks in React?====
// 1.Functional 2. Class based component
// !==== Hook Types====
// 1. useState
// useEffect
// useContext
// useRef
// useReducer
