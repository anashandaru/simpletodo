import { Paper, Button, TextField } from "@material-ui/core";
import { Component } from "react";
import "../App.css";

import { register } from "../services/authServices";

class Register extends Component{
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role:["admin"],
    redirect: false
  };

  handeChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await register(this.state);
        console.log(data);
        localStorage.setItem("token", data.token);
    } catch (error) {
        console.log(error);
    }
  };

  render(){
    return (
      <div className="App flex">
        <Paper className="container">
          <div className="heading">Register</div>
          <form>
            <br />
            <TextField
              name="first_name"
              onChange={this.handeChange}
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              label="first name"
            />
            <br />
            <br />
            <TextField
              name="last_name"
              onChange={this.handeChange}
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              label="last name"
            />
            <br />
            <br />
            <TextField
              name="email"
              onChange={this.handeChange}
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              label="email"
            />
            <br />
            <br />
            <TextField
              name="password"
              onChange={this.handeChange}
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              label="password"
              type="password"
            />
            <br />
            <br />
            <Button type="submit" onClick={this.handleSubmit} color="primary" variant="contained">
              Register
            </Button>
          </form>
        </Paper>
      </div>
    );   
  }
}

export default Register;
