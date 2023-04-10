// in page2.js
import { doc, updateDoc, getDoc } from 'firebase/firestore/lite';
import { db } from '../model/config';

const updateTask = async (taskId, updates) => {
  try {
    const taskRef = doc(db, 'Tasks', taskId);
    const taskDoc = await getDoc(taskRef);

    if (taskDoc.exists()) {
      console.log('Current task data:', taskDoc.data());
      await updateDoc(taskRef, updates);
      console.log(`Task with ID ${taskId} has been updated with:`, updates);
    } else {
      console.log(`Unable to find task with ID ${taskId}.`);
    }
  } catch (error) {
    console.log('Error updating task:', error);
  }
};

export default updateTask;
