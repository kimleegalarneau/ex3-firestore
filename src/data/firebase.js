import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4hT4OAlt2GkN2t9yi8UXk6YZUgJ8tbuQ",
  authDomain: "veille-technologique-b83cd.firebaseapp.com",
  databaseURL: "https://veille-technologique-b83cd-default-rtdb.firebaseio.com",
  projectId: "veille-technologique-b83cd",
  storageBucket: "veille-technologique-b83cd.appspot.com",
  messagingSenderId: "262670044254",
  appId: "1:262670044254:web:ec4f6219670f500f5038cf"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;