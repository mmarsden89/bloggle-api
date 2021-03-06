const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true,
  toObject: {virtuals: true}
})

blogSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'blog'
})

blogSchema.virtual('username', {
  ref: 'User',
  localField: 'owner',
  foreignField: '_id'
})

module.exports = mongoose.model('Blog', blogSchema)
