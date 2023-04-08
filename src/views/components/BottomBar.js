import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';

// vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const BottomBar = () => {
    const [showModal, setShowModal] = useState(false);

    const handlePress = () => {
        setShowModal(true);
    };

    const handleSave = () => {
        // Handle saving the new task here
        setShowModal(false);
    };
    return (

        <View style={styles.main}>

            <View style={styles.subContainer1}>
                <TouchableOpacity
                    style={styles.leftButton}
                >
                    <FontAwesome name="list-alt" size={30} color="#C5C7C6" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.leftButton}
                >
                    <AntDesign name="arrowsalt" size={24} color="#C5C7C6" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.leftButton}
                >
                    <Entypo name="dots-three-horizontal" size={24} color="#C5C7C6" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.AddButton}
                onPress={handlePress}
            >
                <Entypo name="plus" size={30} color="#C5C7C6" />
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#2D2E32',
        height: '10%',
        alignItems: 'center',
    },

    subContainer1: {
        flexDirection: 'row',
    },

    leftButton: {
        marginRight: '15%'
    },

    AddButton: {
        backgroundColor: '#004A77',
        padding: 15,
        borderRadius: 15
    }
})