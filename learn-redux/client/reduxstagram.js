import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import css from "./styles/style.styl";

import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// REDUX: we are gonna save the state nor in a component, but into a redux store

// IndexRoute = in the "/" if we only have this, what component we will render,
// otherwise use <Route>
const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById("root"));
