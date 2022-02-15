import { Paper, Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import "../App.css";

import { register } from "../services/authServices";

const Register = (props) => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(["admin"]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await register({
          first_name,
          last_name,
          email,
          password,
          role
        });
        console.log(data);
        await localStorage.setItem("token", data.token);
        navigate('/');
    } catch (error) {
        console.log(error);
        navigate('/register');
    }
  };

  useEffect(() => {
    if(localStorage.getItem('token')) {
        navigate('/');
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
            onChange={e => setFirstname(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="first name"
          />
          <br />
          <br />
          <TextField
            name="last_name"
            onChange={e => setLastname(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="last name"
          />
          <br />
          <br />
          <TextField
            name="email"
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="email"
          />
          <br />
          <br />
          <TextField
            name="password"
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="password"
            type="password"
          />
          <br />
          <br />
          <Button type="submit" onClick={handleSubmit} color="primary" variant="contained">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Register;
