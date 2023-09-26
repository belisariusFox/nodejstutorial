var express = require('express');
var router = express.Router();

const multipart = require("connect-multiparty");
const multipartMiddleware= multipart({uploadDir:'./uploads'});


router.post('/', function (req, res, next) {
    res.render('account', { title: 'Account', nickname: 'Luca', date: new Date });
});

router.get('/upload', function (req, res, next) {
    res.render('upload', { title: 'Upload test' });
});


module.exports = router;