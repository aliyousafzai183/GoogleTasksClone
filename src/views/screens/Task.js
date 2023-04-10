import * as React from 'react';
import { StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// components
import StarredTasks from './StarredTasks';
import MyTask from './MyTask';
import AddList from './AddList';


const Tab = createMaterialTopTabNavigator();

// That screen is used for making swipeable screens
const Task = () => {

    return (
        <Tab.Navigator
            initialRouteName='My Tasks'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#1F1F1F', borderBottomWidth: 1, borderColor: '#C5C7C6' },
                tabBarActiveTintColor: '#AAC7F8',
                tabBarInactiveTintColor: '#C5C7C6',
                tabBarItemStyle: { width: 'auto', marginHorizontal: 20, padding: 0 },
                tabBarIndicatorStyle: { backgroundColor: '#AAC7F8', height: 3, width: 0.5 },
                tabBarLabelStyle: { fontSize: 15, textTransform: 'none', },
            }}
        >
            <Tab.Screen
                name="Starred"
                component={StarredTasks}
            />
            <Tab.Screen
                name="My Tasks"
                component={MyTask}
            />

            <Tab.Screen
                name="+ New list"
                component={AddList}
                listeners={({ navigation }) => ({
                    // when user presses on that screen
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('AddList');
                    },
                })}
            />

        </Tab.Navigator>
    )
}

export default Task;

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        height: '71%',
    }
})