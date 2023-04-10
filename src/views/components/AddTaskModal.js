import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
import { useState, useEffect, useRef } from 'react';

// vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// connect
import { connect } from 'react-redux';

// addData
import AddTask from '../../controller/addData';

const Todos = ({ toggleModalVisible }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [starred, setStarred] = useState(false);

    const textInputRef = useRef(null);

    useEffect(() => {
        textInputRef.current?.focus();
    }, []);

    // when save button will be pressed
    const handleSave = async () => {
        if (title.length < 3) {
            return;
        }

        await AddTask(title, description, starred);
        toggleModalVisible();
    }

    return (
        <View style={styles.container}>

            <TextInput
                ref={textInputRef}
                value={title}
                placeholder='New task'
                placeholderTextColor="#C7C5C6"
                style={styles.title}
                onChangeText={(txt) => { setTitle(txt) }}
            />

            {/* description input will be shown if the user click button */}
            {
                showDescription
                    ?
                    <TextInput
                        value={description}
                        placeholder='Add description'
                        placeholderTextColor="#C7C5C6"
                        style={styles.description}
                        onChangeText={(txt) => { setDescription(txt) }}
                    />
                    :
                    <></>
            }

            <View style={styles.subContainer}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => setShowDescription(!showDescription)}
                        style={styles.otherButtons}
                    >
                        <MaterialCommunityIcons name="playlist-plus" size={30} color="#C7C5C6" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setShowDatePicker(!showDatePicker)}
                        style={styles.otherButtons}
                    >
                        <MaterialCommunityIcons name="clock-outline" size={30} color="#C7C5C6" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setStarred(!starred)}
                        style={styles.otherButtons}
                    >
                        <FontAwesome name={starred ? "star" : "star-o"} size={30} color="#C7C5C6" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleSave} style={styles.saveButtonContainer}>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalVisible: () => dispatch({ type: 'TOGGLE_MODAL' })
    }
}

export default connect(null, mapDispatchToProps)(Todos);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%'
    },

    title: {
        color: '#C7C5C6',
        fontSize: 18
    },

    description: {
        color: '#C7C5C6',
        fontSize: 15
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    saveButton: {
        color: '#AAC7F8',
        fontSize: 18,
    },

    otherButtons: {
        marginRight: '10%'
    },

    saveButtonContainer: {
        padding: 10
    }
});
