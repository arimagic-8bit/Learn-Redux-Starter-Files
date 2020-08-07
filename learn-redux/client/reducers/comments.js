// we only want to update only a slice of the state
// so we are goin to use a sub-reducer (reducer composition)

// this will handle the update of the individual one
function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            // return without the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0,action.index),
                // after the deleted one to the end
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
    return state
}

function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return{
            //take the current state
            ...state,
            //overwrite this post with a new one
            // we pass a piece of the state, that would we one of the array
            // of comments and the entire action
            [action.postId]: postComments(state[action.postId],action)
        }
    }
    return state
}

export default comments