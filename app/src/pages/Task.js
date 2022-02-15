import React, { useEffect, useState } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from "../components/Navbar"
import {
    postFilter,
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/taskServices";

const Task = (props) => {

    const [taskState, setTasks] = useState([]);
    const [currentTaskState, setCurrenttask] = useState("");

    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const { data } = await getTasks();
            setTasks(data);
            props.isAuthuser("true");
        } catch (error) {
            navigate('login');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = taskState;
        try {
            const { data } = await addTask({ content: currentTaskState });
            const tasks = originalTasks;
            tasks.push(data);
            setTasks(tasks);
            setCurrenttask("");
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilter = async (selectedOption) => {
        try {
            const value = selectedOption.value;
            const { data } = await postFilter(value);
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (currentTask) => {
        const originalTasks = taskState;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;
            setTasks(tasks);
            await updateTask(currentTask, {
                completed: tasks[index].completed,
            });
        } catch (error) {
            setTasks(originalTasks);
            console.log(error);
        }
    };

    const handleDelete = async (currentTask) => {
        const originalTasks = taskState;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            setTasks(tasks);
            await deleteTask(currentTask);
        } catch (error) {
            setTasks(originalTasks);
            console.log(error);
        }
    };

    const filterOptions = [
        { value: 0, label: "All" },
        { value: 1, label: "Completed" },
        { value: 2, label: "Not Completed" },
    ];

    return (
        <div className="App flex">
          <Paper elevation={3} className="container">
            <div className="heading">TO-DO</div>
            <br />
            <Select onChange={handleFilter} options={filterOptions} />
            <form
                onSubmit={handleSubmit}
              className="flex"
              style={{ margin: "15px 0" }}
            >
              <TextField
                onChange={(e) => setCurrenttask(e.target.value)}
                variant="outlined"
                size="small"
                style={{ width: "80%" }}
                value={currentTaskState}
                required={true}
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
              {taskState.map((task) => (
                <Paper key={task._id} className="flex task_container">
                  <Checkbox
                    onClick={() => handleUpdate(task._id)}
                    checked={task.completed}
                    color="primary"
                  />
                  <div className={task.completed ? "task line_through" : "task"}>
                    {task.content}
                  </div>
                  <Button
                    onClick={() => handleDelete(task._id)}
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

export default Task;