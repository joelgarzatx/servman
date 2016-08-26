var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  sitename: { type: String, required: true },
  requestdescription: { type: String },
  closed: { type: Boolean, default: false },
  status: { type: String, defaul: open },
  priority: { type: String },
});

var Request = mongoose.model('Request', requestSchema);
module.exports = Request;
