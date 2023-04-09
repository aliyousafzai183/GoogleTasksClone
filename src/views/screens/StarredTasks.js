import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

// components
import Todos from '../components/Todos';
import NoStarredTasks from '../components/NoStarredTasks';

// data
import data from '../../controller/data';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MyTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const tasksData = await data();
      
          // Filter the tasksData array to only include items that are starred and not completed
          const filteredTasks = tasksData.filter((task) => task.starred && !task.completed);
      
          setTasks(filteredTasks);
        }
      
        fetchData();
      }, []);

    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.container}>
                <NoStarredTasks />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recently Starred</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Todos
                    title={item.title}
                    description={item.description}
                    starred={item.starred}
                    completed={item.completed}
                    date={item.date.toDate().toString().slice(0,10)}
                />}
            />
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1F1F1F',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    title: {
        color: '#C5C7C6',
        fontSize: 18,
    }
})
