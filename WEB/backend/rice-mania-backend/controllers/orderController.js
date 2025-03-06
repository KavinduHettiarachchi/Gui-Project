const Order = require("../models/Order");
const User = require("../models/User");

const mongoose = require("mongoose");

exports.createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;

    console.log(req.body)

    // Validate if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create the order
    const newOrder = new Order({ user: userId, items });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating order", error });
  }
};


// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email contact");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error });
  }
};
