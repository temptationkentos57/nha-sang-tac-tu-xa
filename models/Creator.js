const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model('Creator', CreatorSchema);