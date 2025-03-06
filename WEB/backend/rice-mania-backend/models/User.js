const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
