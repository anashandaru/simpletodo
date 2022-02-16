import { Paper, Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { register } from "../services/authServices";
import Error from "./Error";

const Register = (props) => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(["admin"]);
  const [errorStatus, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({
        first_name,
        last_name,
        email,
        password,
        role,
      });
      console.log(data);
      await localStorage.setItem("token", data.token);
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
      navigate("/register");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="App flex">
      <Paper className="container">
        <div className="heading">Register</div>
        <form>
          <br />
          <TextField
            name="first_name"
            onChange={(e) => setFirstname(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="first name"
          />
          <br />
          <br />
          <TextField
            name="last_name"
            onChange={(e) => setLastname(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="last name"
          />
          <br />
          <br />
          <TextField
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="email"
          />
          <br />
          <br />
          <TextField
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
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
            Register
          </Button>
          <Button onClick={handleLogin} color="primary">
            Sign In
          </Button>
        </form>
        <br/>
        {errorStatus.length > 0 && <Error message={errorStatus}/>}
      </Paper>
    </div>
  );
};

export default Register;
