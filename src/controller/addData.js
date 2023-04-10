import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../model/config';

// that function will add new task to the database
const AddTask = async (title, description, starred) => {
    try {
        const newTask = {
            title: title,
            description: description,
            completed: false,
            starred: starred
        };
        const taskRef = await addDoc(collection(db, 'Tasks'), newTask);
        console.log('Task added with ID: ', taskRef.id);
    } catch (error) {
        console.log(error);
    }
};

export default AddTask;
