import firestore from '@react-native-firebase/firestore';

export const createUserDoc = async (uid: string, name: string) => {
    await firestore().collection('users').doc(uid).set({
        name,
        onboarded: false,
        createdAt: firestore.FieldValue.serverTimestamp(),
    });
};