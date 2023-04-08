import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.main}>
            <Text>         </Text>
            <Text style={styles.title}>Tasks</Text>
            <TouchableOpacity>
                <Image
                    source={require('../../../images/MyPic.jpg')}
                    style={styles.Image}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1F1F1F',
        height: '10%',
        alignItems: 'center',
        paddingHorizontal: 20,
        top: 0
    },

    title: {
        color: '#C5C7C6',
        fontSize: 25
    },

    Image: {
        height: 40,
        width: 40,
        borderRadius: 50
    }
})