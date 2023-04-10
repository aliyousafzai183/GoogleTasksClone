import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

// vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// updateTask in db
import updateTask from '../../controller/updateData';
import { connect } from 'react-redux';

// style
import styles from '../styles/componentStyles/TodoStyle';

// that component will be rendered to display every todo
const Todos = ({ id,  title, description, starred, completed, date, navigation, toggleFetchData }) => {
    const [star, setStar] = useState(starred);
    const [complete, setComplete] = useState(completed);

    // when any task is toggled complete
    const handleComplete = () => {
        setComplete(!complete);
        updateTask(id, { completed: !complete });
        toggleFetchData();
    };
    
    // when any task is toggled starred
    const handleStar = () => {
        setStar(!star);
        updateTask(id, { starred: !star });
        toggleFetchData();
    };

    // when any task is clicked to view details of task
    handleViewTask = () => {
        navigation.navigate('ViewTask');
        toggleFetchData();
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleViewTask}   
        >
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

const mapDispatchToProps = dispatch => {
    return {
        toggleFetchData: () => dispatch({ type: 'TOGGLE_FETCH' })
    }
}

export default connect(null, mapDispatchToProps)(Todos);