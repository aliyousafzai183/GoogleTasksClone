import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const StarredTask = () => {
    return (
        <View style={styles.main}>
            <Text>This is My Starred Tasks page</Text>
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