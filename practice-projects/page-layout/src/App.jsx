import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      {/* Homepage layout */}
      <Layout title="Welcome Page">
        <h1>Welcome to JavaScript</h1>
        <p>This is a basic React layout using reusable component.</p>
        <p>You can use this layout for any kind of web application.</p>
      </Layout>
      {/* Services */}
      <Layout>
        <h2>Our Services</h2>
        <hr />
        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Mobile App Solution</li>
        </ul>
      </Layout>
    </div>
  );
};

export default App;
