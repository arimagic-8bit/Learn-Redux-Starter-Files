import {createStore, compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

// import the root reducer: 
import rootReducer from './reducers/index'

// import all the data
import comments from './data/comments'
import posts from './data/posts'

// create an object for the default data
// posts: posts / comments: comments
const defaultState = {
    posts,
    comments
}