var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  partgroup: { type: String, required: true, default: "Misc"},
  partcode: { type: String, required: true },
  partdescription: { type: String, required: true },
  cost: { type: Number, required: false },
  partprice: { type: Number, required: true , default: 0.0},
  taxable: { type: Boolean, default: true },
  tag: { type: String, required: false },
});

var Part = mongoose.model('Part', partSchema);
module.exports = Part;
