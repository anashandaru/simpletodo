import React from "react";
import Tasks from "../components/Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import Select from 'react-select'
import "../App.css"

/* const Task = (props) => {

} */

class TaskApp extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        const filterOptions = [
            {value:0, label:"All"},
            {value:1, label:"Completed"},
            {value:2, label:"Not Completed"},
        ];
        return (
            <div className="App flex">
                {this.redirectToLogin()}
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <br/>
                    <Select
                        onChange={this.handleFilter}
                        options={filterOptions}
                    />
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.content}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default TaskApp;
