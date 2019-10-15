import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../theme/theme';

export default StyleSheet.create({
    textView: { 
        marginVertical: 10,
        left: -10 
    },
    textStyle: {
        fontSize: 18,
        left: 5, 
        color: '#000',
        fontWeight: 'bold'
    },
    textinputView: {
        width: SCREEN_WIDTH / 1.2,
        flexDirection: 'row',
        borderBottomColor:'rgb(186,195,188)',
        borderBottomWidth: 0.5 
    },
    imageStyle: {
        width: 16,
        height: 22,
        marginRight: 10,
        marginVertical: 5,
    }
})