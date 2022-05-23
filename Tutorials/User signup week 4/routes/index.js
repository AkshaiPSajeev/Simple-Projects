var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Akshai' });
});
router.post('/submit', function(req, res, next) {
  console.log(req.body);
  res.render('submit', { title:"fff"});
  //res.send("got it");
});

module.exports = router;
