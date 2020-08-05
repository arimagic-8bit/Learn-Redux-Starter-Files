import React from "react";

import Photo from "./Photo";

// we use spread to send all props to Photo, but we can pass also the
// info we need only

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo key={i} index={i} post={post} {...this.props} />
        ))}
      </div>
    );
  },
});

export default PhotoGrid;
