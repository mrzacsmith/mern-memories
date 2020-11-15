const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: { type: String },
  message: { type: String },
  creator: { type: String },
  tags: [String],
  selectedFile: { type: String },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('Post', PostSchema)
