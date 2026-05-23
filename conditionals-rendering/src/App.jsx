import React from "react";
import Users from "./Users";
const App = () => {
  const isAuthenticated = true;
  // if (isAuthenticated) {
  //   return <h1>Welcome Back!</h1>;
  // } else {
  //   return <h1>Please log in to continue</h1>;
  // }

  // return (
  //   <h2>{isAuthenticated ? "Welcome Back" : "Please log in to continue"}</h2>
  // );

  // const names = ["John", "Linda", "Zara"];
  // return (
  //   <div>
  //     <h1>List of users</h1>
  //     <ul>
  //       {names.map((name, index) => {
  //         return <li key={index}>{name}</li>;
  //       })}
  //     </ul>
  //   </div>
  // );

  return <Users />;
};

export default App;
