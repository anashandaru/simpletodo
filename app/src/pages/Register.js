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
  const [role, setRole] = useState([]);

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
        localStorage.setItem("token", data.token);
        navigate('/');
    } catch (error) {
        console.log(error);
        navigate('/login');
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
            onChange={setFirstname}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="first name"
          />
          <br />
          <br />
          <TextField
            name="last_name"
            onChange={setLastname}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="last name"
          />
          <br />
          <br />
          <TextField
            name="email"
            onChange={setEmail}
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="email"
          />
          <br />
          <br />
          <TextField
            name="password"
            onChange={setPassword}
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
