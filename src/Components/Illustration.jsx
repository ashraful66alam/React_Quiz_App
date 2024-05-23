import classes from "../styles/Illustration.module.css";
// eslint-disable-next-line react/prop-types
function Illustration({ imgsrc }) {
  return (
    <div className={classes.illustration}>
      <img src={imgsrc} alt="Signup" />
    </div>
  );
}

export default Illustration;
