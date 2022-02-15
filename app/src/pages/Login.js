import { Paper, Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import "../App.css"
import { login } from "../services/authServices";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({email,password});
            await localStorage.setItem("token", data.token);
            console.log(data);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    }, []);

    return (
        <div className="App flex">
            {/* { this.redirectToHome() } */}
            <Paper className="container">
                <div className="heading">Sign In</div>
                <br/><br/>
                {/* {this.state.error_message ? (<Error message={ this.state.error_message }/>) : null} */}
                <form >
                    <br/>
                    <br/>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        variant="outlined"
                        size="small"
                        style={{width : "100%"}}
                        label="email"
                    />
                    <br/>
                    <br/>
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        name="password"
                        size="small"
                        style={{width : "100%"}}
                        label="password"
                        type="password"
                    />
                    <br/>
                    <br/>
                    <Button type="submit" onClick={handleSubmit} color="primary" variant="contained">Sign In</Button>
                    <Button color="primary" onClick={handleRegister} >Sign Up</Button>
                </form>
            </Paper>
        </div>
    );
}

/* class Login extends Component {

    state = {
        email: "",
        password: "",
        redirect: false,
        error_message: ""
    };

    redirectToHome = () => {
        if(this.state.redirect){
            return <Navigate push to="/"/>;
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    

    render(){
        
    }
} */

export default Login;