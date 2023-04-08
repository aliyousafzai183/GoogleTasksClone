import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MyTask = () => {
    return (
        <View style={styles.main}>
            <Text>This is My Tasks page</Text>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
        flex:1
    }
})