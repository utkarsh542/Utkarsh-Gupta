const mongoose = require("mongoose")
const company = require("./companySchema")
const AdSchema = new mongoose.Schema({
  companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,

  });

  module.exports = mongoose.model('Ad', AdSchema);