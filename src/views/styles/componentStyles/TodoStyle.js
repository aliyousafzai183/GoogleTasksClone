import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 5
    },

    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },

    title: {
        color: '#C5C7C6',
        fontSize: 15,
        // fontWeight: 'bold',
    },

    description: {
        color: '#C5C7C6',
        fontSize: 12,
    },

    completedButton: {
        marginHorizontal: 10,
    },

    dateContainer: {
        borderWidth: 1,
        borderColor: '#C5C7C6',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: '15%'
    },

    date: {
        color: '#C5C7C6',
        fontSize: 14,
    },
});
