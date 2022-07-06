import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQI-SJMfDHltzL4Jb7i3pNrZpRhiz_9vk",
  authDomain: "pasteleria-midulcelocura.firebaseapp.com",
  projectId: "pasteleria-midulcelocura",
  storageBucket: "pasteleria-midulcelocura.appspot.com",
  messagingSenderId: "723375467291",
  appId: "1:723375467291:web:33282fb9f89e3062fb01be"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);