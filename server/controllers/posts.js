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
const getPosts = (req, res) => {}

// @desc		Get a  by id
// @route 		GET /:id
const getPostsbyId = (req, res) => {}

// @desc		Add a new
// @route 		POST /
const createPosts = (req, res) => {}

// @desc		Update a  by id
// @route 		PUT /:id
const updatePosts = (req, res) => {}

// @desc		Remove a  by id
// @route 		DELETE /:id
const deletePosts = (req, res) => {}

module.exports = {
  getTest,
  getPosts,
  getPostsbyId,
  createPosts,
  updatePosts,
  deletePosts,
}
