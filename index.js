const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(layouts);
app.set('layout', 'layouts/main_layout.ejs');
app.set('layout ExtractStyles', true);
app.set('layout extractScripts', true);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'ef43jwfoi390r290rawo',
    cookie: {},
}));



const dashboard = require('./routes/dashboard');
app.use('/', dashboard);

const auth = require('./routes/auth');
app.use('/auth', auth);

const todo = require('./routes/todo');
app.use('/todo', todo);

app.listen(3000, () => console.log('Server runs at port 3000...'));