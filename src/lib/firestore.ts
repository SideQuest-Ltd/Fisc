import { firestore } from './firebase';
import { Budget, Transaction, UserProfile } from '../types';

export const createUserDoc = async (uid: string, name: string): Promise<void> => {
  await firestore().collection('users').doc(uid).set({
    name,
    onboarded: false,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const saveBudget = async (uid: string, budget: Budget): Promise<void> => {
  await firestore().collection('users').doc(uid).update({
    budget,
    onboarded: true,
  });
};

export const addTransaction = async (
  uid: string,
  transaction: Omit<Transaction, 'id' | 'createdAt'>
): Promise<void> => {
  await firestore()
    .collection('users')
    .doc(uid)
    .collection('transactions')
    .add({
      ...transaction,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
};

export const deleteTransaction = async (uid: string, transactionId: string): Promise<void> => {
  await firestore()
    .collection('users')
    .doc(uid)
    .collection('transactions')
    .doc(transactionId)
    .delete();
};

export const getUserProfile = async (uid: string): Promise<UserProfile> => {
  const doc = await firestore().collection('users').doc(uid).get();
  
  if (!doc.exists) {
    throw new Error('User profile not found');
  }
  
  return doc.data() as UserProfile;
};