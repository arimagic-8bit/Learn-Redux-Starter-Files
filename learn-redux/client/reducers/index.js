// manages all the reducers

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./comments";

// we are going to combine the two reducers in order to
// use them (react only can have one reducer). We need the reducers
// and the changes that are going to occur
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
