import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.main}>
            <Text>         </Text>
            <Text style={styles.title}>Tasks</Text>
            <Image
                source={require('../../../images/MyPic.jpg')}
                style={styles.Image}
            />
        </View>
    )
}

export default NavBar;

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#2D2E32',
        height:'10%',
        alignItems:'center',
        paddingHorizontal:20,
        top:0
    },

    title:{
        color:'#C5C7C6',
        fontSize:25
    },

    Image:{
        height:40,
        width:40,
        borderRadius:50
    }
})