import firebase from 'react-native-firebase';
import { flattenCollection } from '../api';

const db = firebase.firestore();

export const getRestaurants = () => {
  return db.collection('restaurants').get();
}