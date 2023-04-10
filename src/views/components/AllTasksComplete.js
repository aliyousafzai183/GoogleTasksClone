import * as React from 'react';
import { View, Text } from 'react-native';

// vector Icons
import FrontAwesome from 'react-native-vector-icons/FontAwesome';

// styles
import styles from '../styles/componentStyles/AllTasksCompleteStyles';

// will show when all tasks are completed
const Completed = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.iconContainer}>
            <FrontAwesome name="thumbs-o-up" size={80} color="#C5C7C6" />
            </Text>
            <Text style={styles.title}>All tasks completed</Text>
            <Text style={styles.subTitle}>Nice Work!</Text>
        </View>
    )
}

export default Completed;