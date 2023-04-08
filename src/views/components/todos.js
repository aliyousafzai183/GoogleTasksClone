import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

// vector icons
import {FontAwesome, Feather} from 'react-native-vector-icons';

const Todos = () => {
    const [starred, setStarred] = useState(false);
    const [completed, setCompleted] = useState(false);

    return (
        <View style={styles.main}>

            <View>
                {starred? <FontAwesome name='circle' size={24} color='white' /> : <Feather name='circle' size={24} color='white' />}
                <Text>This is Task</Text>
            </View>

            <TouchableOpacity>
            {completed? <FontAwesome name='star' size={24} color='white' /> : <Feather name='star-o' size={24} color='white' />}
            </TouchableOpacity>

        </View>
    )
}

export default Todos;

const styles = StyleSheet.create({

})