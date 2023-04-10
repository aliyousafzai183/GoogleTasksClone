import * as React from 'react';
import { View, Text} from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

// style
import styles from '../styles/screenStyles/ViewTaskStyle';

// That screen will be used to provide details of 
// each users and user can update title, descriptio, starred and completed, due date
const ViewTask = () => {
    return (
        <View style={styles.main}>
            <AntDesign name="flag" size={40} color="#C7C5C6" />
            <Text style={styles.txt}>Coming Soon!</Text>
        </View>
    )
}

export default ViewTask;