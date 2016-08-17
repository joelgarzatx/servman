var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  field: String,
});

var Test = mongoose.model('Test', testSchema);
module.exports = Test;
