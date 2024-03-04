import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME,) => StyleSheet.create({
    main: {
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain'
    },
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: hp(40),

    },
    tag: {
        backgroundColor: theme.BACKGROUND,
        paddingHorizontal: hp(1.5),
        paddingVertical: hp(0.5),
        marginRight: hp(1.4),
        marginTop: hp(1),
        borderRadius: hp(0.7)
    },
    tagTxt: {
        fontWeight: '600',
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_WHITE
    },
    txt: {
        textAlign: 'left',
        fontSize: FONT_SIZE._20,
        color: COLORS.WHITE,
        marginVertical: hp(1.4),
    },
    publisher: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        borderBottomWidth: 2.5,
        paddingVertical: hp(1.5),
        borderColor: COLORS.WHITE
    },
    pubContainerName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pubContainerIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    pubImg: {
        width: hp(4.2),
        height: hp(4.2),
        borderRadius: hp(4.1),
        marginRight: hp(2)
    },
    pubName: {
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
        textAlign: 'left',
    },
    pubTime: {
        fontSize: FONT_SIZE._12,
        color: COLORS.WHITE,
        textAlign: 'left',
        marginTop: hp(0.3)
    },
    icon: {
        marginLeft: hp(2)
    },
    desc: {
        fontWeight: '500',
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE,
        textAlign: 'left',
        marginVertical: hp(5)
    }
})

export { styles }