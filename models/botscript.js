var mongoose = require('mongoose');

var botscriptSchema = new mongoose.Schema({

	scriptJSO: { type: String },
	updated: { type: Date, default: Date.now() }

});

var Botscript = mongoose.model('Botscript', botscriptSchema);
module.exports = Botscript;
