const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
  ifsc: {
    type: String,
    requried: true,
  },
  bank_id: {
    type: String,
    requried: true,
  },
  branch: {
    type: String,
    requried: true,
  },
  address: {
    type: String,
    requried: true,
  },
  city: {
    type: String,
    requried: true,
  },
  district: {
    type: String,
    requried: true,
  },
  state: {
    type: String,
    requried: true,
  },
  bank_name: {
    type: String,
    requried: true,
  },
});

module.exports=mongoose.model('bankbranch',bankSchema)
