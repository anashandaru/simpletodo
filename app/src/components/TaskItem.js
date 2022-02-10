import Card from "./Card";
import './TaskItem.css';

const TaskItem = (props) => {
    return (
        <div>
            <Card className="task-item">
                <div className="task-item__description">
                    <h2>This is the dummy task</h2>
                </div>
                <button className="task-item__change">Change Task</button>
            </Card>
        </div>
    );
};

export default TaskItem;