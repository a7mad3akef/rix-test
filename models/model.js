var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var kofaSchema = new Schema({
	title: {type: String},
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default:false}
})

var Kofa = mongoose.model('books', kofaSchema);

module.exports = Kofa;