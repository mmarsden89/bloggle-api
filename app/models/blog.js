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
  }
}, {
  timestamps: true,
  toObjects: {virtuals: true}
})
// 
// blogSchema.virtual('comments', {
//   ref: 'Comment',
//   localField: '_id',
//   foreignField: 'blog'
// })

module.exports = mongoose.model('Blog', blogSchema)
