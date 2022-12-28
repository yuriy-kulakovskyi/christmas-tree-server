const mongoose = require("mongoose");

const GoodSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },

  img: {
    type: String,
    required: false
  },

  price: {
    type: String,
    required: true
  }
});

const Good = mongoose.model("GoodData", GoodSchema);
module.exports = Good;