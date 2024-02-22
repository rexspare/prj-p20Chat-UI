import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { isDeviceTablet } from "../../utils/myUtils";

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
    txt: {
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._14
    },
    txt1: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._32,
        marginTop: hp(1.3)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp(1.5),
        marginBottom: hp(0.5)
    },
    txt2: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR,
        marginLeft: hp(1)
    },
    btnContainer: {
        width: '90%',
        borderTopWidth: 1,
        alignSelf: 'center',
        borderColor: theme.WHITE_TO_DARK_GREY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(1),
        paddingVertical: hp(1.5),
        paddingHorizontal: '7%'
    },
    btn: {
        height: hp(5.15),
        borderRadius: hp(5.15),
        width: '48%'
    },
    btntxt: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: FONT_SIZE._16
    },
    txt3: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._18,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginTop: hp(2)
    },
    userContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    userItem: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: hp(3)
    },
    avatar: {
        width: hp(4.3),
        height: hp(4.3),
        borderRadius: hp(4.3),
    },
    itemTxt: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        marginLeft: hp(1),
        marginRight: hp(3)
    }
})

export { styles };
