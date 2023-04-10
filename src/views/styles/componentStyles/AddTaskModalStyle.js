import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%'
    },

    title: {
        color: '#C7C5C6',
        fontSize: 18
    },

    description: {
        color: '#C7C5C6',
        fontSize: 15
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    saveButton: {
        color: '#AAC7F8',
        fontSize: 18,
    },

    otherButtons: {
        marginRight: '10%'
    },

    saveButtonContainer: {
        padding: 10
    }
});