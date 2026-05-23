import React, { useEffect, useState } from "react";
import ProductLists from "./components/ProductLists";

const App = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // Side effect code wil be here
  //   console.log("This runs after render");
  // }, [count]); // we can have no list which means it runs after every render (not suggested); we can also have an empty list which means it runs the first time the component appears on the page; we can also pass in array with some values
  // return (
  //   <div>
  //     <h1>Counter: {count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increase</button>
  //   </div>
  // );
  return (
    <div>
      <h1>List of products</h1>
      <ProductLists />
    </div>
  );
};

export default App;
