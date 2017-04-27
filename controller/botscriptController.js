var Botscript = require('../models/botscript');

exports.getScript = () => {
  console.log('read script from mongo')
}

exports.createScript = (req, cb) => {
  console.log('create script')
  var botscript = new Botscript();
  botscript.scriptJSON = req.body.scriptJSON
  botscript.save((err, botscript)=>{
    if (err){
      cb(err)
    } else {
      cb(botscript);
    }
  })
}

exports.updateScript = () => {
  console.log('update script')
}

exports.deleteScript = () => {
  console.log('delte script')
}
