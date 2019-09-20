var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/showcase', function(req, res, next) {
  res.render('showcase', { title: 'Empty Dreams | FW19' });
});

module.exports = router;
