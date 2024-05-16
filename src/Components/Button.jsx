/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";
function Button({ children }) {
  return (
    <button type="submit" className={classes.button}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
