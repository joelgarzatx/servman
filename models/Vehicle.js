var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  serial: { type: String, required: true },
  model: { type: String },
  priority: { type: String },
  color: { type: String },
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
