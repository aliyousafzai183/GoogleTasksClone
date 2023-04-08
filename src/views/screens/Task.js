import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// components
import StarredTasks from './StarredTasks';
import MyTask from './MyTask';
import AddList from './AddList';

// icons
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

const Tab = createMaterialTopTabNavigator();
const Task = () => {
    return (
        <Tab.Navigator
            initialRouteName='My Tasks'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#2D2E32' },
                tabBarActiveTintColor: '#AAC7F8',
                tabBarInactiveTintColor: '#C5C7C6',
                tabBarItemStyle: { width: 'auto', marginHorizontal:20, padding: 0 },
                tabBarIndicatorStyle: { backgroundColor: '#AAC7F8', height: 3, width:0.6 },
                tabBarLabelStyle: { fontSize: 15, textTransform:'none', },
                }}
        >
            <Tab.Screen
                name="Starred"
                component={StarredTasks}
            />
            <Tab.Screen name="My Tasks" component={MyTask} />
            <Tab.Screen name="+ New list" component={AddList} />
        </Tab.Navigator>
    )
}

export default Task;

const styles = StyleSheet.create({
    main: {
        // backgroundColor:'yellow',
        paddingHorizontal: 20,
        height: '71%'
    }
})