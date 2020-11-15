import React from 'react'
import { useSelector } from 'react-redux'
import Post from './post/Post.jsx'
import useStyles from './styles.js'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)
  return (
    <>
      <Post />
      <Post />
    </>
  )
}

export default Posts
