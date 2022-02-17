// importing user context
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

module.exports = {
  register: async (req, res, next) => {
    try {
      let { first_name, last_name, email, password, role } = req.body;
      email = email.toLowerCase();

      if (!(email && password && first_name && last_name && role)) {
        return res.status(404).send("All input is required");
      }
      console;
      if (password.length < 8) {
        return res.status(404).send("Password should more than 8 characters");
      }

      if (!email.includes("@")) {
        return res.status(404).send("Please enter valid email address");
      }

      if (first_name.trim().length === 0 || last_name.trim().length === 0) {
        return res.status(404).send("Please enter valid input");
      }

      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User already exist. Please login.");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        first_name,
        last_name,
        role,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      return res.status(201).json(user);
    } catch (err) {
      return res.json(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        return res.status(404).send("All input is required");
      }

      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        user.token = token;
        return res.status(200).json(user);
      }

      return res.status(500).send("User not found");
    } catch (error) {
      return res.json(error);
    }
  },
};
