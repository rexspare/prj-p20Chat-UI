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
        marginBottom: (isIOS() && hasNotch()) ? hp(3.5) : hp(2)
    },
    txt: {
        marginTop: hp(14.5),
        color: theme.BLACK_TO_WHITE,
        fontWeight: '600'
    },
    txt1: {
        color: theme.TAB_ICON,
        fontWeight: '400',
        fontSize: FONT_SIZE._14,
        marginTop: hp(1),
    },
    imgBg: {
        width: hp(18.2),
        height: hp(18.2),
        alignSelf: 'center',
        marginVertical: hp(3),
        backgroundColor: theme.BACKGROUND,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    avatar: {
        borderRadius: hp(17)
    }

})

export { styles }