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
