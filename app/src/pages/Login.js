import { Paper, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { login } from "../services/authServices";
import Error from "./Error";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      console.log("cannot login");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="App flex">
      {/* { this.redirectToHome() } */}
      <Paper className="container">
        <div className="heading">Sign In</div>
        <br />
        <br />
        {/* {this.state.error_message ? (<Error message={ this.state.error_message }/>) : null} */}
        <form>
          <br />
          <br />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="email"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            name="password"
            size="small"
            style={{ width: "100%" }}
            label="password"
            type="password"
          />
          <br />
          <br />
          <Button
            type="submit"
            onClick={handleSubmit}
            color="primary"
            variant="contained"
          >
            Sign In
          </Button>
          <Button color="primary" onClick={handleRegister}>
            Sign Up
          </Button>
        </form>
        <br />
        {errorStatus.length > 0 && <Error message={errorStatus} />}
      </Paper>
    </div>
  );
};

export default Login;
