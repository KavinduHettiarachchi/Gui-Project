// models/Feedback.js
const mongoose = require('mongoose');

// Define the schema for the Feedback collection
const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }, // Rating between 1 and 5
  date: { type: Date, default: Date.now },
});

// Create the Feedback model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
