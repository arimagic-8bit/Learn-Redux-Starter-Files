// we can create separate files to organize all the actions
// per type

// increment (num of likes)
// we are returning an object because actions are objects

// we are going to create a reducer for every single piece of state

export function increment(index) {
  return {
    type: "INCREMENT_LIKES", // --> name of the action
    index, // --> the post that needs to be incremented
  };
}

// add comment

export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}

// remove comment

export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index, // --> what comment to remove
  };
}
