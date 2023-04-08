import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const AddList = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>This is My Add New list</Text>
        </View>
    )
}

export default AddList;

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
    }
})