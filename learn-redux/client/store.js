// store: empty database that we are goin to store all the data
// action: any action that happens in our app (click on a button etc)
// and the info needed there
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

const store = createStore(rootReducer, defaultState);

// browserHistory tracks where are we in the webpage
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
