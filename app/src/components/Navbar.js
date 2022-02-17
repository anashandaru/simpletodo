// Importing files from Material-UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
root: {
	flexGrow: 1,
},
menuButton: {
	marginRight: theme.spacing(2),
},
button: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

// Exporting Default Navbar to the App.js File
export default function Navbar(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.clear();
        navigate('login');
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start"
                className={classes.menuButton}
                color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                App
            </Typography>
            <Grid container justifyContent="flex-end">
                <Button id='logout-btn' onClick={handleLogout} color="inherit">Logout</Button>
            </Grid>
            </Toolbar>
        </AppBar>
        </div>
    );
}
