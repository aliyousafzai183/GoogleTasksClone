import { doc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore/lite';
import { db } from '../model/config';

const updateTask = async (title, updates) => {
    try {
        const tasksRef = collection(db, 'Tasks');
        const q = query(tasksRef, where('title', '==', title));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 1) {
            const taskDoc = querySnapshot.docs[0];
            await updateDoc(doc(db, 'Tasks', taskDoc.id), updates);
            console.log(`Task with title ${title} has been updated.`);
        } else {
            console.log(`Unable to update task with title ${title}.`);
        }
    } catch (error) {
        console.log(error);
    }
};


export default updateTask;
