const router = require('express').Router()

const {
  getTest,
  getPosts,
  getPostsbyId,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/posts.js')

router.get('/test', getTest)
router.get('/', getPosts)
router.get('/:id', getPostsbyId)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router
