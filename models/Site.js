var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  site: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: false },
  zone: { type: String, required: false },
  bill_account: { type: String, required: false},
});

var Site = mongoose.model('Site', siteSchema);
module.exports = Site;
