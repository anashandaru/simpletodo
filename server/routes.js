const router = require("express").Router();
const taskController = require('./controllers/taskController');
const authController = require("./controllers/authController");

const Auth = require("./middleware/auth");

router.get("/", (req, res, next) => {
    res.json({
        status: "API is working",
        message: "Welcome to simpletodo app",
    });
});

router.post("/register", authController.register);
router.post("/login", authController.login);

router.route("/tasks/:id")
    .get(taskController.findById)
    .delete(taskController.delete)
    .put(taskController.update);

router.route("/tasks").get(taskController.view).post(taskController.new)
router.route('/tasks/:filter').post(taskController.filter);

module.exports = router;