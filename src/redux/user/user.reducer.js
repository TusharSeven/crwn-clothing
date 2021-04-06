const INITIAL_STATE = {
    currentUser: null
};
//state = INITIAL_STATE  >  if state is undefined i.e. when the app run for first time, then it will have INITIAN_STATE as initial state,
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;

// action object
// action ={
//     type: String,
//     payload: null,
// }