//by using selector the performance of the app increases becausse the state is memoized and the whole component need not to be rendered when there is a slight state change

import { createSelector } from 'reselect';

//input selector , its a func which gets the whole state and return slice of it (one layer deep usually)
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    //collection(array) of input selectors
    [selectCart],
    //function that will return the value that we want from the selector
    cart => cart.cartItems
    //when we use createSelector to create output selector then it is memoized selector
);

//output selectors
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);