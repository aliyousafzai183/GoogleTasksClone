import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

// components
import NoTasks from '../components/NoTasks';
import Todos from '../components/Todos';
import Completed from '../components/AllTasksComplete';

// data
import data from '../../controller/data';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// toCheckfocus
import { useIsFocused } from '@react-navigation/native';

// To display All Tasks
const MyTask = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);
    // to show completed tasks or not , user choice
    const [showCompleted, setShowCompleted] = useState(false);
    const [incompletedTasks, setIncompletedTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // when that screen is focused
    const isFocused = useIsFocused();

    useEffect(() => {
        async function fetchData() {
            const tasksData = await data();
            setTasks(tasksData);
        }
        fetchData();
    }, [isFocused]);

    useEffect(() => {
        setIncompletedTasks(tasks.filter(task => !task.completed));
        setCompletedTasks(tasks.filter(task => task.completed));
    }, [tasks]);

    // if there are no tasks then that screen will show
    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.container}>
                <NoTasks />
            </View>
        )

        // if there are all completed tasks then that screen will show
    } else if (!incompletedTasks || incompletedTasks.length === 0) {

        return (
            <View>
                <Completed />
            </View>
        )
    }

    // if there are both completed and incompleted tasks then that screen will show
    return (
        <View style={styles.container}>
            <View>
                {/* first incomplete tasks will be shown */}
                <FlatList
                    data={incompletedTasks}
                    renderItem={({ item }) => <Todos
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        starred={item.starred}
                        completed={item.completed}
                        date={item.date?.toDate().toString().slice(0, 10)}
                        navigation={navigation}
                    />}
                />
                
                {/* toggle button to show completed tasks */}
                {
                    !completedTasks || completedTasks.length === 0
                        ?
                        <></>
                        :
                        <TouchableOpacity
                            style={styles.completedButton}
                            onPress={() => setShowCompleted(!showCompleted)}>
                            <Text style={styles.completedButtonText}>Completed</Text>
                            <MaterialIcons name={showCompleted ? "expand-less" : "expand-more"} size={24} color="#C5C7C6" />
                        </TouchableOpacity>
                }

                
                {/* if toggle button to show compleed tasks is true, It will be rendered then */}
                {showCompleted &&
                    <FlatList
                        data={completedTasks}
                        renderItem={({ item }) => <Todos
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            starred={item.starred}
                            completed={item.completed}
                            date={item.date?.toDate().toString().slice(0, 10)}
                            navigation={navigation}
                        />}
                    />
                }
            </View>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1F',
        paddingHorizontal: 20,
    },
    completedButton: {
        paddingVertical: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 5
    },
    completedButtonText: {
        color: '#C5C7C6',
        fontSize: 18
    }
})
