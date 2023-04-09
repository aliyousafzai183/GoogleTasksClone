import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// components
import AddTaskModal from './AddTaskModal';

const BottomBar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    }

    if (!modalVisible) {
        return (
            <View style={styles.main}>
                <View style={styles.subContainer1}>
                    <TouchableOpacity style={styles.leftButton}>
                        <FontAwesome name="list-alt" size={30} color="#C5C7C6" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftButton}>
                        <AntDesign name="arrowsalt" size={24} color="#C5C7C6" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftButton}>
                        <Entypo name="dots-three-horizontal" size={24} color="#C5C7C6" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.AddButton} onPress={handlePress}>
                    <Entypo name="plus" size={30} color="#C5C7C6" />
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleClose}>
                <TouchableOpacity style={[styles.modalBackground, { justifyContent: 'flex-end' }]} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <AddTaskModal />
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}

export default BottomBar;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#2D2E32',
        height: '13%',
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
    },

    modalBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: '#2D2E32',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        width:'100%',
        height:'18%'
    },
})