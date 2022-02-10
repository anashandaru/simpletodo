const router = require("express").Router();
const taskController = require('./controllers/taskController');

router.get("/", (req, res, next) => {
    res.json({
        status: "API is working",
        message: "Welcome to simpletodo app",
    });
});

router.route("/tasks/:task_id")
    .get(taskController.findById)
    .delete(taskController.delete)
    .patch(taskController.update);

router.route("/tasks").get(taskController.view).post(taskController.new);

module.exports = router;