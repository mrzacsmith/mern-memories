const { restart } = require('nodemon')
const Post = require('../models/Posts.js')

const currentTime = new Date().toLocaleTimeString()

// @desc		Test endpoint is working
// @route 		GET /test
const getTest = (req, res) => {
  res.status(200).json({
    message: `Endpoint is live at ${currentTime}`,
  })
}

// @desc		Get all s
// @route 		GET /
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// @desc		Get a  by id
// @route 		GET /:id
const getPostsbyId = (req, res) => {}

// @desc		Add a new
// @route 		POST /
const createPost = (req, res) => {}

// @desc		Update a  by id
// @route 		PUT /:id
const updatePost = (req, res) => {}

// @desc		Remove a  by id
// @route 		DELETE /:id
const deletePost = (req, res) => {}

module.exports = {
  getTest,
  getPosts,
  getPostsbyId,
  createPost,
  updatePost,
  deletePost,
}
