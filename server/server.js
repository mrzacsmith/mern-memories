const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const connectDB = require('./utils/connectDb.js')
const postRouter = require('./routes/posts.js')

const server = express()
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
connectDB()

server.use('/api/posts', postRouter)

module.exports = server
