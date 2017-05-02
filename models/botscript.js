var mongoose = require('mongoose');

var botscriptSchema = new mongoose.Schema({
	title: { type: String, required: true },
	script: { type: Object, required: true },
	responsetime: { type : Date, default: Date.now },
	updated: { type: Date, default: Date.now }
});

var Botscript = mongoose.model('Botscript', botscriptSchema);
module.exports = Botscript;
