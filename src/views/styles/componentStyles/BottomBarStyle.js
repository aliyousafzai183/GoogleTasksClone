import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#2D2E32',
        height: '13%',
        alignItems: 'center',
    },

    subContainer1: {
        flexDirection: 'row',
    },

    leftButton: {
        marginRight: '15%'
    },

    AddButton: {
        backgroundColor: '#004A77',
        padding: 15,
        borderRadius: 15
    },

    modalBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: '#2D2E32',
        padding: 20,
        justifyContent: 'center',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        width:'100%',
        height:'25%'
    },
})