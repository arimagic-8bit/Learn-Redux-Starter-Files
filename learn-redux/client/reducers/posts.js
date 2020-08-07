// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. Copy of current state

// the first time this function runs, the state will be nothing
// the reducers takes the state, modifies it, and then
// returns the state

// we can't mutate something that is outside our function!
// so we make a copy of that, and modify that copy
function posts(state = [], action) {
  // action.type is inside the reducer
  // only will act if it's increment
  // we created a pure function
  switch (action.type) {
    case "INCREMENT_LIKES":
        console.log('incremented likes')
        const index = action.index;
        // we cut the array of post, and we only select the one we want
        // and we are returning the whole post array
        return [
            ...state.slice(0,index), //before the post we are updating (prev post)
            {...state[index], likes: state[index].likes + 1}, // post we are updating
            ...state.slice(index + 1) //after the post "" (next post)
        ]
    default:
      return state;
  }
}

export default posts;

// in react, we can only have one reducer, so to not break the rule
// we are gonna create a route reducer

// every time we dispatch an action (make it work)
// all the reducers are going to run
// so, we need to create some logic inside the reducers
// to make them run only when their actions are
// dispatched only
