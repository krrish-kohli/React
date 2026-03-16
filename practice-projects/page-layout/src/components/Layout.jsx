const Layout = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      {/* main */}
      <main>{props.children}</main>
      {/* Footer */}
      <footer>
        <p>&copy; All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
