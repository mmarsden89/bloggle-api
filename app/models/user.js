const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  // blogs: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Blog',
  //   required: true
  // },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

userSchema.virtual('blogs', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'user'
})

module.exports = mongoose.model('User', userSchema)
