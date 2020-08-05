
// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. Copy of current state

// the first time this function runs, the state will be nothing
// the reducers takes the state, modifies it, and then
// returns the state

// we can't mutate something that is outside our function!
// minute 3:14
function posts(state = [], action){
    


    return state
}

export default posts

// in react, we can only have one reducer, so to not break the rule
// we are gonna create a route reducer

// every time we dispatch an action (make it work)
// all the reducers are going to run
// so, we need to create some logic inside the reducers
// to make them run only when their actions are 
// dispatched only