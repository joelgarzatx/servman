var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  code: { type: String, required: true },
  description: { type: String, required: true },
  note: { type: String, required: false },
  time: { type: Number },
  billable: { type: Boolean, default: true },
  tag: { type: String, required: false },
});

var Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
