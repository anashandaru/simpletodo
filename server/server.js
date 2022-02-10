const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const apiRoutes = require('./routes')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello this app is created to learn and explore node Js'));

app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/simpletodo', { useNewUrlParser: true })
    .then(result => {
        const port = 8080; 
        app.listen(port); 
        console.log("Running Server on port " + port);
    })
    .catch(err => { console.log(err); });
