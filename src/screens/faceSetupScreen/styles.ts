import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        marginBottom: (isIOS() && hasNotch()) ? hp(3.5) : hp(2),
        alignItems: 'center'
    },
    txt: {
        marginTop: hp(3),
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.SEMI_BOLD
    },
    txt1: {
        color: theme.TAB_ICON,
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        marginTop: hp(1),
    },
    scanContainer: {
        alignSelf: 'center',
        marginTop: hp(16),
    },
    txtBtn: {
        marginVertical: hp(1)
    },
    btnTxt: {
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._16,
    }

})

export { styles }