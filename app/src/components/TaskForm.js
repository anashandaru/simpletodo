import './TaskForm.css';

const TaskForm = (props) => {
    return(
        <form>
            <div className='new-task__controls'>
                <div className='new-task__control'>
                    <input type="text"/>
                </div>
            </div>
            <div className='new-task__actions'>
                <button type='button'>
                    Cancel
                </button>
                <button type='submit'>
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;