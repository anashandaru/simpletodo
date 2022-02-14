import { Paper, Button, TextField } from "@material-ui/core";
import "../App.css"

const Login = (props) => {
    return (
        <div className="App flex">
            <Paper className="container">
                <div className="heading">Sign In</div>
                <form >
                    <br/>
                    <br/>
                    <TextField
                        variant="outlined"
                        size="small"
                        style={{width : "100%"}}
                        label="email"
                    />
                    <br/>
                    <br/>
                    <TextField
                        variant="outlined"
                        size="small"
                        style={{width : "100%"}}
                        label="password"
                        type="password"
                    />
                    <br/>
                    <br/>
                    <Button type="submit" color="primary" variant="contained">Sign In</Button>
                </form>
            </Paper>
        </div>
    );
};

export default Login;