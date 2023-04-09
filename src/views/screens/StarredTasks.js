import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// components
import NoTasks from '../components/NoTasks';
import Todos from '../components/Todos';

// data
import data from '../../model/data';
import getStarredData from '../../controller/starred';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MyTask = () => {
    const [tasks, setTasks] = useState(getStarredData);
    console.log(tasks);

    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.main}>
                <NoTasks />
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
                    date={item.date}
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
