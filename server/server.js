const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const apiRoutes = require('./routes')
const cors = require("cors")
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello this app is created to learn and explore node Js'));

app.use('/api', apiRoutes);

mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_DATABASE}`)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));