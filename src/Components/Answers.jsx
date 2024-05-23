import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox labelClass={classes.answer} text="A New Hope 1"></Checkbox>
    </div>
  );
}

export default Answers;
