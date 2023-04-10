import * as React from 'react';
import { View, Text, Image } from 'react-native';

// styles
import styles from '../styles/componentStyles/NoStarredTaskStyle';

// will be displayed when there are no starred tasks
const NoStarredTasks = () => {
    return (
        <View style={styles.main}>
            <Image
                source={require('../../../images/NoStarredLogo.png')}
                style={styles.Image}
            />
            <Text style={styles.title}>No starred tasks</Text>
            <Text style={styles.subTitle}> Mark important tasks with a star so you can easily find them here</Text>
        </View>
    )
}

export default NoStarredTasks;