// this is where we are going to work with all the data
// and put it in the view

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// this is going to pass as props every data an action to Main
const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;
