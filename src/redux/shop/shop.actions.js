import ShopActionTypes from './shop.types';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

//blow thunk code is replaced by saga

//we are able to call functions inside dispatch because of redux thunk, thunk is a middleware
//redux thunk dosent care about action which returns objects(ex: fetchCollectionsFailure), it ignores it, it cares about actions which returns funtion ex: below fetchCollectionsStartAsync(), its job is to give dispatch functionsality as parameter
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');

//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then((snapshot) => {
//             // console.log(snapshot);

//             //converting the returned ccollection from firebase to map with additional fileds
//             const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//             // console.log(collectionsMap);
//             dispatch(fetchCollectionsSuccess(collectionsMap));
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
//     }
// };




