var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET projects page. */
router.get('/', function (req, res, next) {
  res.render('projects', { title: 'Express' });
});

/* GET about page. */
router.get('/', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET contact page. */
router.get('/', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});



module.exports = router;
