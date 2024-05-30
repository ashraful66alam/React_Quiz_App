/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";
function Button({ buttonClass, children, ...rest }) {
  return (
    <button className={`${classes.button} ${buttonClass}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
