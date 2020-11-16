import axios from 'axios'

const url = 'http://localhost:5000/api/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`)
