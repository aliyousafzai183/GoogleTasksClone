import * as React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';

const NoStarredTasksScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Image
                source={require('../../images/NoTaskIcon.png')}
                style={styles.image}
            />
            <Text>No tasks yet</Text>
            <Text>Add your to-dos and keep track of them across Google Workspace</Text>
        </View>
    )
}

export default NoStarredTasksScreen;

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:'black'
    },

    image:{
        width:150,
        height:150,
    },
})