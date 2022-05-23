var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let values=["akshai","sravan","arjun"];
    let person={name:"akshai",comments:{comment:"this is a comment",date:"10-11-1994"}};
  res.render('about', { person});
});

module.exports = router;
