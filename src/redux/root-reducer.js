import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//localStorage object on window browser i.e. i want to use local storage as my default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    //reducers that we want to persist
    //we not added  user reducer because it is already handled by firebase
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

//code without persistence

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer,
// });