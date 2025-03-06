const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ type: String, required: true }], // Array of ordered food & beverages
  createdAt: { type: Date, default: Date.now },
});

{ timestamps: true }

module.exports = mongoose.model("Order", orderSchema);
module.exports = orderSchema;