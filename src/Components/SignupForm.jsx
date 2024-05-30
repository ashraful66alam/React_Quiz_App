import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Signup.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup } = useAuth();
  const navigateTo = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password doesnt match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigateTo("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.message);
    }
  }
  return (
    <Form className={classes.signup} onSubmit={handlesubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter Names"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        required
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Confirm Password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      ></Checkbox>

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
