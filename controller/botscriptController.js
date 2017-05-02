var Botscript = require('../models/botscript');

exports.getScript = (req, cb) => {

  let input = req.params.searchterms.substr(1)
  let regex = new RegExp(input)

  Botscript.find({'title' : regex}, (err, docs) =>{
    err ? cb(err) : cb(docs)
  })
}

exports.getAllScript = (cb) => {
  Botscript.find({'script':/(?:)/}, (err, docs) =>{
    err ? cb(err) : cb(docs)
  })
}

exports.createScript = (req, cb) => {

  var botscript = new Botscript();

  botscript.title = req.body.title
  botscript.script = req.body.script
  botscript.save((err, docs)=>{
    err ? cb(err) : cb(docs)
  })
}

exports.updateScript = (req, cb) => {
  if (req.headers._id){

    let id = req.headers._id
    let newJSON = req.body.script

    Botscript.findByIdAndUpdate(id, {'script': newJSON}, { new:true }, (err, docs) =>{
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
