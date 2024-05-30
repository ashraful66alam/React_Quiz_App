import IllusTrationImg from "../../assets/images/signup.svg";
// import classes from "../../styles/Signup.module.css";
// import Button from "../Button";
// import Checkbox from "../Checkbox";
// import Form from "../Form";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";
// import TextInput from "../TextInput";
function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgsrc={IllusTrationImg}></Illustration>
        <SignupForm></SignupForm>
      </div>
    </>
  );
}

export default Signup;
