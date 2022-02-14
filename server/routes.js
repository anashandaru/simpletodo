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
    .get(Auth.verifyUser('admin'), taskController.findById)
    .delete(Auth.verifyUser('admin'), taskController.delete)
    .put(Auth.verifyUser('admin'), taskController.update);

router.route("/tasks").get(Auth.verifyUser('admin'), taskController.view).post(taskController.new)
router.route('/tasks/:filter').post(Auth.verifyUser('admin'), taskController.filter);

module.exports = router;