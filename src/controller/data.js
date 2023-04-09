import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../model/config';

const data = async () => {
    try {
        const data = [];
        const taskscol = collection(db, 'Tasks');
        const tasksSnapshot = await getDocs(taskscol);
        tasksSnapshot.forEach(doc => data.push(doc.data()));
        return data;
    } catch (error) {
        console.log(error);
    }

}

export default data;