import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    btnConatiner: {
        width: '100%',
        marginBottom: isIOS() ? hp(4) : hp(0.8),
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    center: {
        flex: 1,
        ...COMMON_STYLES.center_,
        paddingHorizontal: '1%',
        marginVertical: hp(2)
    },
    branding: {
        width: hp(30),
        height: hp(30),
        transform: [{ rotate: '4deg' }],
    }
})  
