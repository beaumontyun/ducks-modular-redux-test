// action name
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// function to be called at the front-end
export const increment = () => ({
    // type = what the action is
    type: INCREMENT
})
// function to be called at the front-end
export const decrement = () => ({
    type: DECREMENT
})

// start state
const initialState = {
    count: 0
}

// export reducer
export default (state = initialState, action) => {
    // what is going to control based on what action is called
    // just like an if-statement
    switch(action.type) {
        // if we have an increment action...
        case INCREMENT:
            // REMEMBER to spread the state (...state) so that the FULL state won't be overwritten/delete by the new state from count+1
            return { ...state, count: state.count + 1 };
        // if we have a decrement action...
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        // a switch statement needs a default statement
        default:
            return state;
    }
}