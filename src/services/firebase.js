import firestore from '@react-native-firebase/firestore'

export const checkDocExists = (collName, docId) => {
    return firestore()
        .collection(collName)
        .doc(docId)
        .get()
        .then((snap) => {
            return snap?.exists
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}