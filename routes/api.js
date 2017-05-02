let express = require('express');
let router = express.Router();
let botscriptController = require ('../controller/botscriptController')

router.get('/script.get:searchterms', function(req, res, next) {
  // requires searchterms in req.params
  botscriptController.getScript(req, (docs)=>{
    res.json(docs);
  });
  // res.json(botscriptController.getScript(req))
});

router.get('/script.get', function(req, res, next) {
  // nothing required
  botscriptController.getAllScript((docs)=>{
    res.json(docs);
  });
});

router.post('/script.create', function(req, res, next) {
  // requires from request: body.title, body.script
  botscriptController.createScript(req, (docs) => {
    res.json(docs)
  });
});

router.put('/script.update', function(req, res, next) {
  // requires from request: headers._id, body.script
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
