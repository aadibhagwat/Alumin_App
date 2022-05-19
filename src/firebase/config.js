import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBc-ta2KD6V1i1R-SpeXrrLjY2E6QUPKCY',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://aluminiapp-25666-default-rtdb.firebaseio.com',
  projectId: 'aluminiapp-25666',
  storageBucket: 'aluminiapp-25666.appspot.com',
  messagingSenderId: '280873140683',
  appId: '1:280873140683:android:893861380df289ae0af64e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };