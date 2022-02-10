import './TaskFilter.css';

const TaskFilter = (props) => {
    return (
        <div className='tasks-filter'>
            <div className='tasks-filter__control'>
                <label>Filter</label>
                <select>
                    <option value='completed'>Completed</option>
                    <option value='onProgress'>On Progress</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;