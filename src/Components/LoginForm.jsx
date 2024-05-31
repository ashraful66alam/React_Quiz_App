import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigateTo = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigateTo("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.message);
    }
  }

  return (
    <Form className={classes.login} onSubmit={handlesubmit}>
      <TextInput
        required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don&apos;t have an account? <Link to="/signup">Signup </Link>
        instead.
      </div>
    </Form>
  );
}

export default LoginForm;
