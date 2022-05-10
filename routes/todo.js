const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/todo', {
        todoList: req.session.todoList,
    });
});

router.post('/add', async (req, res) => {
    const name = req.body.name;

    if (lreq.session.todoList) {
        req.session.todoList = [];
    }

    req.session.todoList.push(name);

    res.redirect('/todo');
});

router.post('/done/:index', async (req, res) => {
    const index = req.params.index;

    if (req.session.todoList && index < req.session.todoList.length) {
        req.session.todoList.splice(index, i);
    }

    res.redirect('/todo');
});

module.exports = router;