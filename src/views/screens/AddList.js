import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const AddList = () => {
    return (
        <View style={styles.main}>
            <Text>This is My Add New list</Text>
        </View>
    )
}

export default AddList;

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
        height:'71%'
    }
})