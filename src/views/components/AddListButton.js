import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const AddListButton = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Button title='Create New List' onPress={()=>navigation.navigate('AddList')}/>
        </View>
    )
}

export default AddListButton;

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1F1F1F',
        paddingHorizontal:20,
    }
})