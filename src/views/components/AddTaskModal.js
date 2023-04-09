import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
import { useState, useEffect, useRef } from 'react';

// vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default Todos = () => {
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const textInputRef = useRef(null);

    useEffect(() => {
        textInputRef.current?.focus();
    }, []);

    return (
        <View style={styles.container}>

            <View>
                <TextInput
                    ref={textInputRef}
                    value={title}
                    placeholder='New task'
                    onChangeText={(txt) => { setTitle(txt) }}
                />
            </View>

            {
                showDescription
                    ?
                    <View>
                        <TextInput
                            value={description}
                            placeholder='Add details'
                            onChangeText={(txt) => { setDescription(txt) }}
                        />
                    </View>
                    :
                    <></>
            }

            <View>

                <View>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity></TouchableOpacity>
                </View>

            </View>

            {
                showSaveButton
                    ?
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    :
                    <></>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor:'white',
    },
});
