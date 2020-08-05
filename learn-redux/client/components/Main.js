import React from 'react';
import { Link } from 'react-router';

// we are importing all the children and passing all the props to them

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* this is going to pass every data as props to the first child */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
