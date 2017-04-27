var Botscript = require('../models/botscript');

exports.getScript = (req, cb) => {
  let input = req.params.searchterms.substr(1)
  let regex = new RegExp(input)
  console.log('input', regex)
  Botscript.find({'title' : regex}, (err, docs) =>{
    err ? cb(err) : cb(docs)
  })
}

exports.getAllScript = (cb) => {
  Botscript.find({'scriptJSON':/(?:)/}, (err, docs) =>{
    err ? cb(err) : cb(docs)
  })
}

exports.createScript = (req, cb) => {
  console.log('create script')
  var botscript = new Botscript();
  botscript.title = req.body.title
  botscript.scriptJSON = req.body.scriptJSON
  botscript.save((err, docs)=>{
    err ? cb(err) : cb(docs)
  })
}

exports.updateScript = (req, cb) => {
  if (req.headers._id){
    let id = req.headers._id
    let newJSON = req.body.scriptJSON
    Botscript.findByIdAndUpdate(id, {'scriptJSON': newJSON}, { new:true }, (err, docs) =>{
      if (err) console.log('UPDATE err: ', err)
      cb(docs)
    })
  } else {
    console.log(`UPDATE err: didn't get id`)
  }
}

exports.deleteScript = (req, cb) => {
  if (req.headers._id){
    let id = req.headers._id
    Botscript.findByIdAndRemove(id, (err, docs) =>{
      if (err) console.log('DELETE err: ', err)
      cb(docs)
    })
  } else {
    console.log(`DELETE err: didn't get id`)
  }
}
