const router = require("express").Router();
const taskController = require('./controllers/taskController');

router.get("/", (req, res, next) => {
    res.json({
        status: "API is working",
        message: "Welcome to simpletodo app",
    });
});

router.route("/tasks/:id")
    .get(taskController.findById)
    .delete(taskController.delete)
    .put(taskController.update);

router.route("/tasks").get(taskController.view).post(taskController.new)
router.route('/tasks/:filter').post(taskController.filter);

module.exports = router;