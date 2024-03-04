import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
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
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    icon: {
        width: hp(4.82),
        height: hp(4.82),
        borderRadius: hp(4.82),
        marginTop: hp(3.5),
        alignSelf: 'center'
    },
    txt: {
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._24,
        fontWeight: '600',
        marginTop: hp(3)
    },
    txt1: {
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._16,
        fontWeight: '500',
        marginTop: hp(1.5)
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: hp(1),
        alignSelf: 'center',
    },
    ticket: {
        backgroundColor: "rgba(217, 217, 217, 0.25)",
        width: '100%',
        paddingVertical: hp(2),
        marginTop: hp(3.5),
        borderRadius: hp(2)
    },
    row1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: hp(2),
    },
    row2: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2.5),
        paddingHorizontal: hp(2),
    },
    txt3: {
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        fontWeight: '500'
    },
    txt4: {
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        fontWeight: '700'
    },
    bulgeContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: '100%',
        marginTop: hp(2.5)
    },
    bulge1: {
        backgroundColor: theme.BACKGROUND,
        width: hp(3.75),
        height: hp(3.75),
        borderRadius: hp(3.75),
        left: -hp(2)
    },
    bulge2: {
        backgroundColor: theme.BACKGROUND,
        width: hp(3.75),
        height: hp(3.75),
        borderRadius: hp(3.75),
        right: -hp(2)
    },
    line:{
        flex:1,
        borderTopWidth:1,
        borderStyle: 'dashed'
    },
    dottedLineContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      dottedLineDot: {
        width: 8,
        height: 1,
        backgroundColor: theme.BORDER,
        borderRadius: 100,
        marginLeft: 6,
        
      },
})

export { styles }