const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    if (lreq.session.username || req.session.username !== 'admin') {
        res.redirect('/auth/login');
    } else {
        res.render('pages/dashboard');
    }

});

module.exports = router;