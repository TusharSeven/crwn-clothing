import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUJLUL_lVT0lKdbJI0r_cjZEQnJXZSw3M",
    authDomain: "crwn-db-e83e4.firebaseapp.com",
    projectId: "crwn-db-e83e4",
    storageBucket: "crwn-db-e83e4.appspot.com",
    messagingSenderId: "320116086362",
    appId: "1:320116086362:web:e08e12398b13b010c3aa63",
    measurementId: "G-22CMLGGF67"
};
firebase.initializeApp(config);

//funnction to create user document if no doucument exists of same uid
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    //docreference searching for user in users collection
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // user snapshot object
    const snapShot = await userRef.get();
    //if user doesnt exists then create a new user
    if (!snapShot.exists) {
        //getting name and email form userAuth
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    //if we want to use userReference at another loaction
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);
    //batch will batch all the calls together, so that if error occurs in half procees, the all the process should be declined
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        //if we do not pass parameter in .doc() then firebase will return the randomly generated value
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

//converting the returned ccollection from firebase to map with additional fileds
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    // console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

// export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;