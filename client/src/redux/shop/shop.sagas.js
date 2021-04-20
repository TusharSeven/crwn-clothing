// takeEvery() listens for every action of spcific types that we pass
import { takeLatest, call, put, all } from "redux-saga/effects";
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';


//this is a generator function
// general syntax is
// function* funcName() {
//     yield ...
//     yield ...
//     ......
//     return ..
// } 
// yield pause until we call the .next() method on the generator func


function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        console.log(collectionRef);
        const snapshot = yield collectionRef.get();
        console.log(snapshot);
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        //put is an alternative of dispacth in saga , is is used to call actions
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure);
    }


    // dispatch(fetchCollectionsStart());

    // collectionRef.get().then((snapshot) => {
    //     // console.log(snapshot);

    //     //converting the returned ccollection from firebase to map with additional fileds
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //     // console.log(collectionsMap);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

//this saga pauses whenever a specific actiontypes that we want comes in
export function* fetchCollectionsStart() {
    //whenever there is a action of FETCH_COLLECTIONS_START, it wlii call the fetchCollectionAsync func
    //takseLatest will respond to the last action, ignoring the previous actions
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}