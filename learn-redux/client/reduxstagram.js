import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// helps us to bind redux in react
import {Provider } from 'react-redux'

import css from "./styles/style.styl";

import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import the store
import store, {history} from './store'

// REDUX: we are gonna save the state nor in a component, but into a redux store

// IndexRoute = in the "/" if we only have this, what component we will render,
// otherwise use <Route>
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById("root"));
