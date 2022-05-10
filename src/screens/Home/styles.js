import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#faf9f6'
    },
    
    locationContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%'
    },

    locationCountry: {
        color: 'black',
        marginBottom: '1%',
        fontSize: 15,
        fontFamily: 'Poppins-Light'
    },
    
    locationState: {
        color: 'black',
        marginBottom: '1%',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },

    locationCity: {
        color: 'black',
        marginTop: '3%',
        fontSize: 25,
        fontFamily: 'Poppins-Regular'
    },  

    infoTop: {
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '8%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 7,
    },

    tempContainer: {
        marginLeft: '8%',
        
    },

    tempNumb: {
        color: 'black',
        marginTop: '5%',
        fontSize: 60,
        fontFamily: 'Poppins-Bold'
    },

    tempCity: {
        color: 'black',
        marginBottom: '15%',
        fontSize: 20,
        fontFamily: 'Poppins-Regular'
    },

    conditionContainer: {
        display: 'flex',
        marginRight: '7%'
    },

    conditionIcon: {
        height: 70,
        width: 70,
        marginTop: '30%'
    },

    tempCondition: {
        color: 'black',
        marginTop: '10%',
        fontSize: 10,
        fontFamily: 'Poppins-Regular'
    },

    lastUpdatedContainer: {
        width:'90%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: '5%'
    },

    lastUpdatedText: {
        color: 'black',
        marginTop: '3%',
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    },

    tilesContainer: {
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        flexWrap: 'wrap'
    },
    
    tile: {
        width: '40%',
        height: '10%',
        backgroundColor: 'white',
        marginTop: '5%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 7,
    },  

    tileText: {
        color: 'black',
        marginTop: '2%',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },

    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'black'
    },
    loadingText: {
        color: 'black',
        marginTop: 5
    }
});

export default styles;