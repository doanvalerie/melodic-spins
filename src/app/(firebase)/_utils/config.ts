import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAk2asVJ_IxAV3bIHcezv3dFZ8M3keO3G0',
  authDomain: 'melodic-spins.firebaseapp.com',
  projectId: 'melodic-spins',
  storageBucket: 'melodic-spins.appspot.com',
  messagingSenderId: '688998182353',
  appId: '1:688998182353:web:a288c9edb1c3e97d2ac4f0',
  measurementId: 'G-W8C6K0R732',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
