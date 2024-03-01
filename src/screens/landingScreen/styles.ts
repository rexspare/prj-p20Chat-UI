import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    img: {
        width: hp(32),
        height: hp(32),
        resizeMode: 'contain',
        marginTop: hp(20),
        alignSelf: 'center',
    },
    txt: {
        marginTop: hp(4),
        fontSize: FONT_SIZE._32,
        fontFamily: FONTS.REGULAR,
        textAlign: 'left',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    txt3: {
        marginTop: hp(2),
        fontSize: FONT_SIZE._16,
        fontFamily: FONTS.REGULAR,
        textAlign: 'left',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
        color: COLORS.SECONDARY
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
        marginBottom: (isIOS() && hasNotch()) ? hp(3.5) : hp(2)
    },
    row: {
        flexDirection: 'row',
        marginBottom: hp(3)
    },
    txt1: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_PRIMARY,
        textAlign: 'left',
        flexShrink: 1
    },
    txt2: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._14,
        color: theme.PRIMARY_TO_WHITE,
        flexShrink: 1
    },
    checkBox: {
        marginRight: hp(1),
        marginTop: isDeviceTablet() ? 0 : hp(0.4),
    }

})

export { styles }