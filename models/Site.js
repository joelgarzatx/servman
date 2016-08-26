var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  sitename: { type: String, required: true },
  sitenumber: { type: String, required: true },
  sitedescription: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: false },
  serviced: { type: Boolean, required: true, default:true },
  zone: { type: String, required: false, default: 1 },
  bill_account: { type: String, required: false},
  unittype: { type: String, required: false},
  unitcolor: { type: String, required: false},
  unitserial: { type: String, required: false}
});

var Site = mongoose.model('Site', siteSchema);
module.exports = Site;
