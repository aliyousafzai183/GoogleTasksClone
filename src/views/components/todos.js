import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

// vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// updateTask
import updateTask from '../../controller/updateData';

export default Todos = ({ id, title, description, starred, completed, date }) => {
    const [star, setStar] = useState(starred);
    const [complete, setComplete] = useState(completed);

    const handleComplete = () => {
        // setComplete(!complete);
        updateTask(title, { completed: !complete });
    };
    
    const handleStar = () => {
        // setStar(!star);
        updateTask(title, { starred: !star });
    };

    return (
        <TouchableOpacity
            style={styles.container}>
            <View style={styles.main}>
                <TouchableOpacity
                    onPress={handleComplete}
                    style={styles.completedButton}>
                    {complete ? (
                        <FontAwesome name='circle' size={24} color='#C5C7C6' />
                    ) : (
                        <Feather name='circle' size={24} color='#C5C7C6' />
                    )}
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {description
                        ?
                        <Text style={styles.description}>{description}</Text>
                        :
                        <></>
                    }
                </View>

                <TouchableOpacity onPress={handleStar}>
                    {star ? (
                        <FontAwesome name='star' size={24} color='#C5C7C6' />
                    ) : (
                        <FontAwesome name='star-o' size={24} color='#C5C7C6' />
                    )}
                </TouchableOpacity>
            </View>

            {date && !complete? <View style={styles.dateContainer}>
                <Text style={styles.date}>{date}</Text>
            </View> : <></>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 5
    },

    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },

    title: {
        color: '#C5C7C6',
        fontSize: 15,
        // fontWeight: 'bold',
    },

    description: {
        color: '#C5C7C6',
        fontSize: 12,
    },

    completedButton: {
        marginHorizontal: 10,
    },

    dateContainer: {
        borderWidth: 1,
        borderColor: '#C5C7C6',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: '15%'
    },

    date: {
        color: '#C5C7C6',
        fontSize: 14,
    },
});
