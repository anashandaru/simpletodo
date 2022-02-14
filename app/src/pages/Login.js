import { Paper, Button, TextField } from "@material-ui/core";
import { Component } from "react";
import { Navigate } from 'react-router-dom';
import "../App.css"

import { login } from "../services/authServices";

class Login extends Component {

    state = {
        email: "",
        password: "",
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
            const { data } = await login(this.state);
            console.log(data);
            localStorage.setItem("token", data.token);
            this.setState({redirect:true});
        } catch (error) {
            console.log(error);
        }
    };

    render(){
        return (
            <div className="App flex">
                { this.state.redirect ? (<Navigate push to="/"/>) : null }
                <Paper className="container">
                    <div className="heading">Sign In</div>
                    <form >
                        <br/>
                        <br/>
                        <TextField
                            onChange={this.handeChange}
                            name="email"
                            variant="outlined"
                            size="small"
                            style={{width : "100%"}}
                            label="email"
                        />
                        <br/>
                        <br/>
                        <TextField
                            onChange={this.handeChange}
                            variant="outlined"
                            name="password"
                            size="small"
                            style={{width : "100%"}}
                            label="password"
                            type="password"
                        />
                        <br/>
                        <br/>
                        <Button type="submit" onClick={this.handleSubmit} color="primary" variant="contained">Sign In</Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default Login;