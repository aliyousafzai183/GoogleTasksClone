import * as React from 'react';
import { View, Text, Image } from 'react-native';

// style
import styles from '../styles/componentStyles/NoTaskStyle';

// Will be displayed when there are no tasks in the database
const NoTasks = () => {
    return (
        <View style={styles.main}>
            <Image
                source={require('../../../images/NoTaskIcon.png')}
                style={styles.Image}
            />
            <Text style={styles.title}>No tasks yet</Text>
            <Text style={styles.subTitle}>Add your to-dos and keep track of them across google workspace</Text>
        </View>
    )
}

export default NoTasks;