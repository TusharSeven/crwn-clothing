import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    //this saga is listenenig to the action of type SIGN_OUT_SUCCESS which belongs to user
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        //listener chain
        call(onSignOutSuccess),
    ])
}