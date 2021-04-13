// takeEvery() listens for every action of spcific types that we pass
import { take, takeEvery } from "redux-saga/effects";

import ShopActionTypes from '../shop/shop.types';


//this is a generator function
// general syntax is
// function* funcName() {
//     yield ...
//     yield ...
//     ......
//     return ..
// } 
// yield pause until we call the .next() method on the generator func


export function* fetchCollectionAsync() {
    yield console.log('i am fired');
}

//this saga pauses whenever a specific actiontypes that we want comes in
export function* fetchCollectionStart() {
    //whenever there is a action of FETCH_COLLECTIONS_START, i wlii call the fetchCollectionAsync func
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync)
}