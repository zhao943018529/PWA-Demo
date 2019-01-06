const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const todoData = require('./public/data.json');
const port = 3000;
const app = express();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

app.get('/getTodos', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(todoData));
});

app.listen(port, err => {
    if (err) {
        console.log(err.message + '--port:' + port);
    } else {
        console.log('server startup successfully with port 3000');
    }
});