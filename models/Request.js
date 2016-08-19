var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  _location_id: { type: Schema.Types.ObjectId, required: true },
  closed: { type: Boolean, default: false },
  status: { type: String },
  priority: { type: String },
});

var Request = mongoose.model('Request', requestSchema);
module.exports = Request;
