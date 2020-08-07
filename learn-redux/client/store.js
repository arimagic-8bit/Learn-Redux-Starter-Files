// store: empty database that we are goin to store all the data
// action: any action that happens in our app (click on a button etc)
// and the info needed there

// to use redux in asynchronous functions like API calls
// we can use saga or thunk 

import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer:
import rootReducer from "./reducers/index";

// import all the data
import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
// posts: posts / comments: comments
const defaultState = {
  posts,
  comments,
};

// to make redux tools work in our browser, we have to enhance our store

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState,enhancers);

// browserHistory tracks where are we in the webpage
export const history = syncHistoryWithStore(browserHistory, store);

// let's make our reducers to hotload! (update on browser without refresh)
// to make this, we have to re-require our reducer

if(module.hot){
  module.hot.accept('./reducers/',() => {
    // we require the reducer papa that has every reducer 
    const nextRootReducers = require('./reducers/index').default;
    store.replaceReducer(nextRootReducers)
  })
}

export default store;
