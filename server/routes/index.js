var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', test : 'Luca', number: 117, link:'/users', array:[
    'elemento 1',
    'elemento 2',
    'elemento 3',
    'elemento 4',
    'elemento 5',
    'elemento 6',
  ] });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

router.get('/login', function(req, res, next) {
  res.render('login', {title:'Login'});
});

router.get('/login-studente', function(req, res, next) {
  res.render('studente', {title:'Login studente'});
});


module.exports = router;
