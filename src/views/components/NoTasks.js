import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
    main: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        padding:75
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

    Image: {
        height: 100,
        width: 100,
        marginVertical:'5%'
    }
})