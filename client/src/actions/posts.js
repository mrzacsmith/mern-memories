import * as api from '../api/index.js'

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = () => async (dispatch) => {}

export const createPost = () => async (dispatch) => {}
