/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";
function Button({ buttonClass, children }) {
  return (
    <button className={`${classes.button} ${buttonClass}`}>{children}</button>
  );
}

export default Button;
