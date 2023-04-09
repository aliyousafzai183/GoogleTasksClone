import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// components
import BottomBar from '../components/BottomBar';
import NavBar from '../components/NavBar';
import Task from './Task';

const MainView = () => {
    return (
        <View style={styles.main}>
            <NavBar />
            <Task />
            <BottomBar />
        </View>
    )
}

export default MainView;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1,
    }
})