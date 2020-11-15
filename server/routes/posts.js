const router = require('express').Router()

const currentTime = new Date().toLocaleTimeString()

// @desc			Test endpoint is working
// @route 		GET /test
router.get('/test', (req, res) => {
  res.status(200).json({
    message: `Endpoint is live at ${currentTime}`,
  })
})

// @desc			Get all s
// @route 		GET /
router.get('/', (req, res) => {})

// @desc			Get a  by id
// @route 		GET /:id
router.get('/:id', (req, res) => {})

// @desc			Add a new
// @route 		POST /
router.post('/', (req, res) => {})

// @desc			Update a  by id
// @route 		PUT /:id
router.put('/:id', (req, res) => {})

// @desc			Remove a  by id
// @route 		DELETE /:id
router.delete('/:id', (req, res) => {})

module.exports = router
