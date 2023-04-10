import * as React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

// components
import BottomBar from '../components/BottomBar';
import NavBar from '../components/NavBar';
import Task from './Task';

const MainView = () => {
    return (
        <KeyboardAvoidingView style={styles.main}>
            <NavBar />
            <Task />
            <BottomBar />
        </KeyboardAvoidingView>
    )
}

export default MainView;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1,
    }
});