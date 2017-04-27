var mongoose = require('mongoose');

var botscriptSchema = new mongoose.Schema({

	scriptJSON: { type: String },
	updated: { type: Date, default: Date.now() }
});

var Botscript = mongoose.model('Botscript', botscriptSchema);
module.exports = Botscript;
