const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Creator', required: true },
  status: { type: String, default: 'pending' },
  payment: { type: Number, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);