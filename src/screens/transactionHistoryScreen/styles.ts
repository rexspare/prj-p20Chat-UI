import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK
    },
    container: {
        borderTopLeftRadius: hp(3.5),
        borderTopRightRadius: hp(3.5),
        overflow: 'hidden',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    contentContainerStyle: {
        marginTop: hp(0.5)
    },
    optionsContainerStyle: {
        width: 'auto',
        marginTop: hp(3),
        borderRadius: hp(1.5),
        backgroundColor: theme.CHAP_POPUP,
        paddingVertical: hp(1)
    },
    menuTxt: {
        textAlign: 'left',
        paddingLeft: hp(1.5),
        paddingRight: hp(1.5),
        paddingVertical: hp(0.75),
        fontSize: FONT_SIZE._16,
    },
    DpContainerStyles: {
        borderColor: theme.PRIMARY_TO_WHITE,
        marginTop: hp(5),
        marginBottom: hp(4),
        alignSelf: 'flex-start'
    },
    DpSelectedTextStyle: {
        color: theme.PRIMARY_TO_WHITE
    },
    txt3: {
        fontWeight: '500',
        fontSize: FONT_SIZE._18,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
    },
})

export { styles }