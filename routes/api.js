var express = require('express');
var router = express.Router();
var botscriptController = require ('../controller/botscriptController')

router.get('/script.get:searchterms', function(req, res, next) {
  // requires searchterms in req.params
  botscriptController.getScript(req, (docs)=>{
    res.json(docs);
  });
});

router.get('/script.get', function(req, res, next) {
  // nothing required
  botscriptController.getAllScript((docs)=>{
    res.json(docs);
  });
});

router.post('/script.create', function(req, res, next) {
  // requires from request: body.title, body.scriptJSON
  botscriptController.createScript(req, (docs) => {
    res.json(docs)
  });
});

router.put('/script.update', function(req, res, next) {
  // requires from request: headers._id, body.scriptJSON
  botscriptController.updateScript(req, (docs)=>{
    res.json(docs)
  });
});

router.delete('/script.delete', function(req, res, next) {
  // requires from request: headers._id
  botscriptController.deleteScript(req, (docs)=>{
    res.json(docs)
  });
});

module.exports = router;
