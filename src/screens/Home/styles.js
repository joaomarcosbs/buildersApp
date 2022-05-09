import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    text: {
        color: 'white',
        marginTop: '10%',
        fontSize: 20
    },

    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: 'white',
        marginTop: 5
    }
});

export default styles;