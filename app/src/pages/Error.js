import { Alert, AlertTitle } from '@material-ui/lab';

const Error = (props) => {
    return (
        <div>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {props.message}
            </Alert>
        </div>
    );
}

export default Error;