import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK,
    },
    header: {
        borderBottomWidth: 1 / 3,
        borderColor: theme.BORDER
    },
    item: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
        marginTop: hp(3),
        minHeight: hp(5),
    },
    iconContainer: {
        width: hp(4)
    },
    itemTitle: {
        fontWeight: '400',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left'
    },
    itemSubtle: {
        fontWeight: '400',
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left',
        marginTop: hp(0.75)
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: hp(1)
    },
    bgImage: {
        width: isDeviceTablet() ? hp(35) : wp(42.5),
        height: isDeviceTablet() ? hp(35) : wp(42.5),
        resizeMode: 'cover',
        borderRadius: hp(1.5),
        marginTop: hp(3)
    },
    shadowContainer: {
        width: isDeviceTablet() ? hp(35) : wp(42.5),
        height: isDeviceTablet() ? hp(35) : wp(42.5),
        borderRadius: hp(1.5),
        backgroundColor: COLORS.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 4,
        marginTop: hp(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: '500',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginTop: hp(1)
    },
    txt1: {
        fontWeight: '600',
        fontSize: FONT_SIZE._18,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginTop: hp(3.5),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    contentContainerStyle: {
        marginTop: hp(0.5)
    },
    txt2: {
        fontWeight: '600',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginTop: hp(3.5),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    item1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: isDeviceTablet() ? '96%' : '90%',
        height: hp(5.5),
        borderBottomWidth: 1 / 3,
        alignSelf: 'center',
        borderColor: theme.BORDER,
    },
    item2: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: isDeviceTablet() ? '96%' : '90%',
        borderBottomWidth: 1 / 3,
        alignSelf: 'center',
        borderColor: theme.BORDER,
        paddingVertical: hp(1.5),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { styles }