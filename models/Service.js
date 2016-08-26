var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  servicecode: { type: String, required: true },
  servicedescription: { type: String, required: true },
  servicenote: { type: String, required: false },
  servicetime: { type: Number },
  billable: { type: Boolean, default: true },
  tag: { type: String, required: false },
});

var Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
