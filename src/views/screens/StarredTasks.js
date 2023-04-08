import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useState } from 'react';

// components
import NoStarredTasks from '../components/NoStarredTasks';

const StarredTask = () => {
   
    const [displayNoStarredTask, setDisplayNoStarredTask] = useState(true);
    
    if(displayNoStarredTask){
        return (
            <View style={styles.main}>
                <NoStarredTasks />
            </View>
        )
    }

    return (
        <View style={styles.main}>
            <Text>This is My Tasks page</Text>
        </View>
    )
}

export default StarredTask;

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
        flex:1
    }
})