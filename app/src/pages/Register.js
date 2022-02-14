import { Paper, Button, TextField } from "@material-ui/core";
import "../App.css";

const Register = (props) => {
  return (
    <div className="App flex">
      <Paper className="container">
        <div className="heading">Register</div>
        <form>
          <br />
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="first name"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="last name"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="email"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="password"
            type="password"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            label="rewrite-password"
            type="password"
          />
          <br />
          <br />
          <Button type="submit" color="primary" variant="contained">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
