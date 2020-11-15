const router = require('express').Router()

const {
  getTest,
  getPosts,
  getPostsbyId,
  createPosts,
  updatePosts,
  deletePosts,
} = require('../controllers/posts.js')

router.get('/test', getTest)
router.get('/', getPosts)
router.get('/:id', getPostsbyId)
router.post('/', createPosts)
router.put('/:id', updatePosts)
router.delete('/:id', deletePosts)

module.exports = router
