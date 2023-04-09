import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// components
import NoTasks from '../components/NoTasks';
import Todos from '../components/Todos';

// data
import data from '../../model/data';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MyTask = () => {
    const [tasks, setTasks] = useState(data);
    const [showCompleted, setShowCompleted] = useState(false);
    const [incompletedTasks, setIncompletedTasks] = useState(tasks.filter(task => !task.completed))
    const [completedTasks, setCompletedTasks] = useState(tasks.filter(task => task.completed))

    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.main}>
                <NoTasks />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
        <View>
            <FlatList
                data={incompletedTasks}
                renderItem={({ item }) => <Todos
                    title={item.title}
                    description={item.description}
                    starred={item.starred}
                    completed={item.completed}
                    date={item.date}
                />}
            />

            <TouchableOpacity
                style={styles.completedButton}
                onPress={() => setShowCompleted(!showCompleted)}>
                <Text style={styles.completedButtonText}>Completed</Text>
                <MaterialIcons name={showCompleted? "expand-less" : "expand-more"} size={24} color="#C5C7C6" />
            </TouchableOpacity>

            {showCompleted &&
                <FlatList
                    data={completedTasks}
                    renderItem={({ item }) => <Todos
                        title={item.title}
                        description={item.description}
                        starred={item.starred}
                        completed={item.completed}
                        date={item.date}
                    />}
                />
            }
        </View>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1F1F1F',
        paddingHorizontal: 20,
    },
    completedButton: {
        paddingVertical: 10,
        marginVertical: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:5
    },
    completedButtonText: {
        color: '#C5C7C6',
        fontSize: 18
    }
})
