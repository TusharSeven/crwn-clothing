import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};
//state = INITIAL_STATE  >  if state is undefined i.e. when the app run for first time, then it will have INITIAN_STATE as initial state,
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
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