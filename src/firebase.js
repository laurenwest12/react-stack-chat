import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyDap5Qr-upYYSBcg6b5ikVDk8kmcOBs4M4',
  authDomain: 'react-slack-clone-2885b.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-2885b.firebaseio.com',
  projectId: 'react-slack-clone-2885b',
  storageBucket: 'react-slack-clone-2885b.appspot.com',
  messagingSenderId: '349637261275',
  appId: '1:349637261275:web:1152c8d8a76b99f2e819fe',
  measurementId: 'G-1EKB4SHGXQ'
};
firebase.initializeApp(config);

export default firebase;
