var mongoose = require('mongoose');

var botscriptSchema = new mongoose.Schema({
	title: { type: String, required: true },
	scriptJSON: { type: String, required: true },
	updated: { type: Date, default: Date.now() }
});

var Botscript = mongoose.model('Botscript', botscriptSchema);
module.exports = Botscript;
