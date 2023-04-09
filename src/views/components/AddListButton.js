import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign/'

const AddListButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.main}
            onPress={() => navigation.navigate('AddList')}
        >
            <AntDesign name="pluscircleo" size={50} color="#C7C5C6" />
            <Text style={styles.txt}>Add new list</Text>
        </TouchableOpacity>
    )
}

export default AddListButton;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1F1F1F',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 150
    },

    txt: {
        color: "#C7C5C6",
        fontSize: 14,
        textAlign: 'center',
        marginTop: '10%'
    }
})