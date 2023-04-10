import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

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