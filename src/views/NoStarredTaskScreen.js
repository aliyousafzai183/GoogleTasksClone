import * as React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';

// styles
import styles from '../styles/NoTasksScreensStyle.js'

const NoTasksScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Image
                source={require('../../images/NoStarredLogo.png')}
                style={styles.image}
            />
            <Text>No starred tasks</Text>
            <Text>Mark Important tasks with a star so you can easily find them here</Text>
        </View>
    )
}

export default NoTasksScreen;