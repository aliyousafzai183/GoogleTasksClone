import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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