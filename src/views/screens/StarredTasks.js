import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

// components
import Todos from '../components/Todos';
import NoStarredTasks from '../components/NoStarredTasks';
import DraggableFlatList from 'react-native-draggable-flatlist';

// data
import data from '../../controller/data';

const MyTask = ({navigation}) => {
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

    const handleTaskView = () => {
        navigation.navigate('ViewTask');
    }

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
            <DraggableFlatList
                data={tasks}
                renderItem={({ item, drag, isActive }) => (
                    <TouchableOpacity
                        onPress={handleTaskView}
                        onLongPress={drag}
                        style={[
                            styles.todoItem,
                            isActive ? styles.activeItem : null
                        ]}
                    >
                        <Todos
                            title={item.title}
                            description={item.description}
                            starred={item.starred}
                            completed={item.completed}
                            date={item.date?.toDate().toString().slice(0, 10)}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => `draggable-item-${item.id}`}
                onDragEnd={({ data }) => setTasks(data)}
            />

        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1F',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    title: {
        color: '#C5C7C6',
        fontSize: 18,
    }
})
