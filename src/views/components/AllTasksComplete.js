import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Icon
import FrontAwesome from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        padding:75,
        backgroundColor:'black',
        height:'100%',
    },

    title: {
        color: '#C5C7C6',
        fontSize: 23,
        textAlign:'center',
        marginTop:'5%'
    },

    subTitle:{
        color: '#C5C7C6',
        fontSize: 17,
        textAlign:'center',
        marginTop:'2%'
    },

    iconContainer: {
        marginVertical:'5%'
    }
})