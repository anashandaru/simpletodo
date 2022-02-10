import TaskForm from "./TaskForm";
import './NewTask.css'

const NewTask = (props) => {
    return(
        <div className="new-task">
            <TaskForm/>
        </div>
    );
};

export default NewTask;