const Task = require('../models/taskModel');

exports.new = async (req, res, next) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
};

exports.view = async (req, res, next) => {
    const tasks = await Task.find().exec();
    res.json(tasks);
};

exports.delete = async (req, res, next) => {
    try {
        const task = await Task.deleteMany({_id: req.params.id});
        res.send(task);
    } catch (error) {
        res.send(error);
    }
};

exports.filter = async (req, res, next) => {
    try {
        const tasks = await Task.find(req.body);
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        const task = await Task.updateMany(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
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