import React from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// components
import AddTaskModal from './AddTaskModal';

// connect
import { connect } from 'react-redux';

// styles
import styles from '../styles/componentStyles/BottomBarStyle';

const BottomBar = ({modalVisible, toggleModalVisible}) => {

    // when modalsave button of modal is pressed
    const handlePress = () => {
        toggleModalVisible();
    };

    // when modal is closed by user
    const handleClose = () => {
        toggleModalVisible();
    }

    //  if modal is not visible then display bottom bar
    // but if modal is visible then do not render the bottom bar
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
                <TouchableOpacity style={[styles.modalBackground, { justifyContent: 'flex-end' }]} onPress={handleClose}>
                    <View style={styles.modalContent}>
                        <AddTaskModal />
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    modalVisible: state.modalVisible
})

const mapDispatchToProps = dispatch => ({
    toggleModalVisible: () => dispatch({ type: 'TOGGLE_MODAL' })
})

export default connect (mapStateToProps, mapDispatchToProps) (BottomBar);