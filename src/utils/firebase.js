import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCzQTmCQC_-R3OVLF1HgFfMs0ku-ObirBI",
  authDomain: "adl-clothing.firebaseapp.com",
  databaseURL: "https://adl-clothing.firebaseio.com",
  projectId: "adl-clothing",
  storageBucket: "adl-clothing.appspot.com",
  messagingSenderId: "339295834516",
  appId: "1:339295834516:web:e0a806c0ec376f6eb33f81",
  measurementId: "G-PSCS1YQEQV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Verify if I receive a valid user, to not save nulls on app sign outs.
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  documentsToAdd.forEach(newDocument => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, newDocument);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
