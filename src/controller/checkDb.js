import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from '../model/config';

const db = getFirestore(firebaseApp);
const tasksCollection = collection(db, 'Tasks');

const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
  const tasks = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(tasks);
});

export default unsubscribe;