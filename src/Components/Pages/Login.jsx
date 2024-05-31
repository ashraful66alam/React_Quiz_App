// import { Link } from "react-router-dom";
import IllusTrationImg from "../../assets/images/login.svg";
// import classes from "../../styles/Login.module.css";
// import Button from "../Button";
// import Form from "../Form";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";
// import TextInput from "../TextInput";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration imgsrc={IllusTrationImg}></Illustration>
        <LoginForm></LoginForm>
      </div>
    </>
  );
}

export default Login;
