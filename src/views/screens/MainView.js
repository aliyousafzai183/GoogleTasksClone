import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native';

// components
import BottomBar from '../components/BottomBar';
import NavBar from '../components/NavBar';
import Task from './Task';

// style
import styles from '../styles/screenStyles/MainViewStyle';

// that view provides a navbar, swiping task screens, and bottom bar
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