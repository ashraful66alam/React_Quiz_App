import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
