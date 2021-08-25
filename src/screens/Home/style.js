import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        padding: 8,
    },
    input: {
        width: 350,
        height: 60,
        borderWidth: 1,
        borderRadius: 14,
        padding: 17,
        marginBottom: 32,
        backgroundColor: '#fff'
    },
    image: {
        backgroundColor: 'red',
        alignSelf: 'center'
    },
    title: {
        marginTop: 11,
        overflow: 'visible',
        fontWeight: '500',
        fontSize: 22,
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        overflow: 'visible',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',
        color: '#636363',
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#fff',
        width: 350,
        height: 'auto',
        borderRadius: 14,
        overflow: 'visible',
        flexDirection: 'row',
        marginBottom: 10,
    },
    imageCard: {
        margin: 14,
        width:50,
        height:50,
    },
    titleCard: {
        overflow: 'hidden',
        fontWeight: '500',
        fontSize: 16,
        color: '#2196f3',
        marginTop: 14,
    },
    descriptionCard: {
        overflow: 'hidden',
        fontWeight: '400',
        fontSize: 16,
        color: '#636363',
    },
    save: {
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        width: 104,
        height: 32,
        margin: 14,
        alignSelf: 'flex-end'
    },
    saveText: {
        color: '#2196f3',
        fontWeight: '500',
        fontSize: 16,
        overflow: 'visible',
    },
    seeSaves: {
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        width: 190,
        height: 49,
        alignSelf: 'flex-end',
        marginTop: 100
    },
    seeSaveText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        overflow: 'visible',
    },
});