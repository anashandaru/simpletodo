const jwt = require("jsonwebtoken");
const config = process.env;
const User = require("../models/userModel");

module.exports = {
    verifyUser : (role) => {
        return async (req, res, next) => {
            const token = req.body.token || req.query.token || req.headers["x-access-token"];
            if (!token) {
                return res.status(403).send("A token is required for authentication");
            }
            try {
                const decoded = jwt.verify(token, config.TOKEN_KEY);
                req.user = decoded;
                const user = await User.findOne({_id: req.user.user_id});
                req.body.owner = req.user.user_id;
                if(!user.role.includes(role)){
                    return res.status(401).send("You don't have permissions to access this page");
                }
            } catch (err) {
                return res.status(401).send("Invalid Token or you're not authorized user.");
            }
            return next();
        }
    }
};