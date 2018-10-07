import * as firebase from 'firebase/app';
import 'firebase/database';

const InitDatabase = () => {
  const config = {
    apiKey: 'AIzaSyAJ5Pj9uEyyxnVpuSIgt9DtUjiq5xHWiss',
    authDomain: 'gift-chooser-react.firebaseapp.com',
    databaseURL: 'https://gift-chooser-react.firebaseio.com',
    projectId: 'gift-chooser-react',
    storageBucket: 'gift-chooser-react.appspot.com',
    messagingSenderId: '388076936577'
  };
  firebase.initializeApp(config);
};

export default InitDatabase;