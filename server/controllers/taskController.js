const Task = require('../models/taskModel');

exports.new = async (req, res, next) => {
    const newTask = new Task({
        owner: req.body.owner,
        content: req.body.content,
    })

    await newTask.save(err => {
        if (err) res.json(err);
        else res.json({ message: "new task created", data: newTask });
    });
};

exports.view = async (req, res, next) => {
    const tasks = await Task.find().exec();
    res.json(tasks);
};

exports.delete = async (req, res, next) => {
    try {
        await Task.deleteOne({ _id: req.params.task_id }).exec();
    } catch (err) {
        res.json(err);
        return next(err);
    }
    res.json({ message: "task deleted" })
};
exports.update = async (req, res, next) => {
    let task;
    try {
        task = await Task.findById(req.params.task_id).exec();
        task.content = req.body.content;
        await task.save();
    } catch (err) {
        res.json(err);
        return next(err);
    }
    res.json({ message: "task updated", data: task });
};

exports.findById = async (req, res, next) => {
    let task;
    try {
        task = await Task.findById(req.params.task_id).exec();
    } catch (err) {
        res.json(err);
        return next(err);
    }
    res.json(task);
};