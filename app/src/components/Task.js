import Card from './Card';
import './Task.css'
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const Task = (props) => {
    return (
        <div>
            <Card className="tasks">
                <TaskFilter />
                <TaskList />
            </Card>
        </div>
    );
};

export default Task;