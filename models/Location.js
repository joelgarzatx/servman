var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  _site_id: { type: Schema.Types.ObjectId, required: true },
  _vehicle_id: { type: Schema.Types.ObjectId, required: true },
  start_date: { type: Date },
  end_date: { type: Date },
  latest: { type: Boolean, default: true },
});

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;
