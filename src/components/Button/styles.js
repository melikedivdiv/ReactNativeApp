import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../config/colors';
export const ButtonStyles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,

        backgroundColor: colors.accent,

        ...Platform.select({
            android:{
                elevation: 10,
                borderRadius: 28,
                overflow: 'hidden',
            },
        })

    },

    touchable: {
        flex:1,
        alignSelf: 'stretch',

    },
    touchableContent: {
        flex: 1,
        alignSelf: 'stretch',

        justifyContent: 'center',
        alignItems: 'center',
    }
});

