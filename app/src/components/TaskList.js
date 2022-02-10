import TaskItem from "./TaskItem";
import './TaskList.css';

const TaskList = (props) => {
    return (
        <ul className="tasks-list">
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </ul>
    );
};

export default TaskList;