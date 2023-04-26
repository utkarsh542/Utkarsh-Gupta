const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  _id: Number,
  name: String,
  url: String,
});

module.exports = mongoose.model("company", CompanySchema);
