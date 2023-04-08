import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

// components
import NoTasks from '../components/NoTasks';

// data
import data from '../../model/data';

const MyTask = () => {
    const [tasks, setTasks] = useState(data);

    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.main}>
                <NoTasks />
            </View>
        )
    }

    return (
        <View style={styles.main}>
            <Text>aughi</Text>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1F1F1F',
        paddingHorizontal: 20,
        flex: 1
    }
})