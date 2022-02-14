import axios from "axios";
const apiUrl = "http://localhost:4000/api/tasks";

const header = { headers: {"x-access-token" : localStorage.getItem('token')}};

export function postFilter(filter){
    let task;
    filter = parseInt(filter);
    switch (filter) {
        case 0:
            task = {};
            break;
        case 1:
            task = {completed: true};
            break;
        case 2:
            task = {completed: false};
            break;
        default:
            break;
    }
    return axios.post(`${apiUrl}/${filter}`, task);
}

export function getTasks() {
    return axios.get(apiUrl, header);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
