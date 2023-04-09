import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign/'

const AddListButton = ({ navigation }) => {
    return (
        <View
            style={styles.main}>
            <TouchableOpacity
                onPress={() => navigation.navigate('AddList')}
                style={styles.button}
            >
                <AntDesign name="pluscircleo" size={50} color="#C7C5C6" />
                <Text style={styles.txt}>Add new list</Text>
            </TouchableOpacity>
        </View>
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
    },

    button:{
        alignItems:'center'
    }
})