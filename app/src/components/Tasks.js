import { Component } from "react";
import {
    postFilter,
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/taskServices";
import { Navigate } from 'react-router-dom';

class Tasks extends Component {
    
    state = {
        tasks: [],
        currentTask: "",
        loginSuccess: false
    };

    async componentDidMount() {
        try {
            const { data } = await getTasks();
            this.setState({ tasks: data });
        } catch (error) {
            console.log(error);
        }
    }

    checkAuth = () => {
        const token = localStorage.getItem("token");
        if(token){
            this.setState({loginSuccess: true});
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTask: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const { data } = await addTask({ content: this.state.currentTask });
            const tasks = originalTasks;
            tasks.push(data);
            this.setState({ tasks, currentTask: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleFilter = async (selectedOption) => {
        try {
            const value = selectedOption.value;
            const { data } = await postFilter(value);
            this.setState({ tasks: data });
        } catch (error) {
            console.log(error);
        }

    };

    handleUpdate = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;
            this.setState({ tasks });
            await updateTask(currentTask, {
                completed: tasks[index].completed,
            });
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    handleDelete = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            this.setState({ tasks });
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    handleLogout = async () => {
        localStorage.clear();
        return <Navigate to={"/login"}/>
    };
}

export default Tasks;
