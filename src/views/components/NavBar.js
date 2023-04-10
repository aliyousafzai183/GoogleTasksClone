import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// styles
import styles from '../styles/componentStyles/NavBarStyle';

// top nav bar that`s displayed on top
const NavBar = () => {
    return (
        <View style={styles.main}>
            <Text>         </Text>
            <Text style={styles.title}>Tasks</Text>
            <TouchableOpacity>
                <Image
                    source={require('../../../images/MyPic.jpg')}
                    style={styles.Image}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;