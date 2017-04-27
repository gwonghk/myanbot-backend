var express = require('express');
var router = express.Router();
var botscriptController = require ('../controller/botscriptController')


router.get('/script.get:id', function(req, res, next) {
  botscriptController.getScript();
  res.send('respond with a API resource');
});

router.post('/script.create', function(req, res, next) {
  console.log(`body?`, req.body)
  botscriptController.createScript(req, (botscript) => {
    res.json(botscript)
  });
});

router.put('/script.update', function(req, res, next) {
  botscriptController.updateScript();
  res.send('respond with a API resource updated');
});

router.delete('/script.delete', function(req, res, next) {
  botscriptController.deleteScript();
  res.send('respond with a API resource deleted');
});



module.exports = router;
