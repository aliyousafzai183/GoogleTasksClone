import * as React from 'react';
import { View, Text} from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

// style
import styles from '../styles/screenStyles/AddListStyle';

// That screen will be returned when user clicks on add new list
const AddList = () => {
    return (
        <View style={styles.main}>
            <AntDesign name="flag" size={40} color="#C7C5C6" />
            <Text style={styles.txt}>Coming Soon!</Text>
        </View>
    )
}

export default AddList;