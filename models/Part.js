var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  code: { type: String, required: true },
  description: { type: String, required: true },
  note: { type: String, required: false },
  cost: { type: Number, required: true },
  price: { type: Number, required: true },
  taxable: { type: Boolean, default: true },
  tag: { type: String, required: false },
});

var Part = mongoose.model('Part', partSchema);
module.exports = Part;
