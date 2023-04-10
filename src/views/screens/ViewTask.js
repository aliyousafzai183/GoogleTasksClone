import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

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

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },

    txt:{
        color:'#C7C5C6',
        fontSize:15
    }
})