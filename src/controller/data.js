import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../model/config';

// used to retreive data from the database and return it in array of objects
const data = async () => {
    try {
        const data = [];
        const taskscol = collection(db, 'Tasks');
        const tasksSnapshot = await getDocs(taskscol);
        tasksSnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }

}

export default data;