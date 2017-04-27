var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/script.get:id', function(req, res, next) {
  res.send('respond with a API resource');
});

router.get('/script.create', function(req, res, next) {
  res.send('respond with a API resource created');
});

router.get('/script.update', function(req, res, next) {
  res.send('respond with a API resource updated');
});

router.get('/script.delete', function(req, res, next) {
  res.send('respond with a API resource deleted');
});



module.exports = router;
