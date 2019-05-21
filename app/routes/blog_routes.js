// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for blogs
const Blog = require('../models/blog')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { blog: { title: '', text: 'foo' } } -> { blog: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()
const Comment = require('../models/comment')

// INDEX
// GET /blogs
router.get('/blogs', (req, res, next) => {
  Blog.find().populate('comments')
    .then(blogs => {
      return blogs.map(blog => blog.toObject())
    })
    .then(blogs => res.status(200).json({ blogs: blogs }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /blogs/
router.get('/blogs/:id', (req, res, next) => {
  Blog.findById(req.params.id).populate('comments')
    .then(handle404)
    .then(blog => {
      Comment.find({ blog: blog._id })
        .then(blogs => res.status(200).json({ blog: blog, comments: blog.comments }))
        .catch(next)
    })
    .catch(next)
})

// CREATE
// POST /blogs
router.post('/blogs', requireToken, (req, res, next) => {
  // set owner of new blog to be current user
  req.body.blog.owner = req.user.id

  Blog.create(req.body.blog)
    // respond to succesful `create` with status 201 and JSON of new "blog"
    .then(blog => {
      res.status(201).json({ blog: blog.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /blogs/
router.patch('/blogs/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.blog.owner

  Blog.findById(req.params.id)
    // .populate('id')
    .then(handle404)
    .then(blog => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, blog)

      // pass the result of Mongoose's `.update` to the next `.then`
      return blog.update(req.body.blog)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /blogs/
router.delete('/blogs/:id', requireToken, (req, res, next) => {
  Blog.findById(req.params.id)
    .then(handle404)
    .then(blog => {
      // throw an error if current user doesn't own `blog`
      requireOwnership(req, blog)
      // delete the blog ONLY IF the above didn't throw
      blog.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
