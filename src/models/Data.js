const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
