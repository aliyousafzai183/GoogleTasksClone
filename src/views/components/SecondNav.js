import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// vector-icons
import Icon from 'react-native-vector-icons/Ionicons';

const SecondNav = () => {
    return (
        <View style={styles.main}>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>Starred</Text>
                {/* <Icon name="star" size={30} color="#ccc" /> */}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>My Tasks</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>+ New list</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SecondNav;

const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        height: '5%',
        alignItems: 'center',
        borderBottomWidth:0.3,
        borderBottomColor:'#fff'
    },
    button:{
        marginRight:'15%'
    },

    text:{
        color:'#fff',
        fontSize:16
    }
})