import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        height: '100%'
    },
    header: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: isDeviceTablet() ? "2%" : "5%",
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 70 : hp(2),
        marginBottom: hp(1.25),
        alignItems: 'flex-start'
    },
    cameraContainer: {
        width: hp(10.6),
        height: hp(12.5),
        borderRadius: hp(1),
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: COLORS.WHITE
    },
    camera: {
        width: '100%',
        height: '100%'
    },
    bottomcontainer: {
        position: 'absolute',
        bottom: 0,
    },
    imageBg: {
        width: wp(100),
        height: hp(21.45),
        opacity: 0.9,
        resizeMode: 'cover',
        borderTopLeftRadius: hp(5),
        borderTopRightRadius: hp(5),
        paddingHorizontal: '5%',
        justifyContent: 'space-evenly',
        paddingBottom: hp(2),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    incomingContainer: {
        width: '74%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    swiper: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        height: hp(7.5),
        paddingHorizontal: hp(0.7),
        borderWidth: 0,
        marginTop: hp(4),
        marginBottom: hp(6),
    },
    swiperTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE
    },
    context: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: hp(15.6),
        height: hp(15.6),
        borderRadius: hp(15.6),
    },
    txt: {
        fontFamily: FONTS.BOLD,
        fontSize: FONT_SIZE._24,
        color: COLORS.WHITE,
        marginTop: hp(1)
    },
    txt1: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
        marginTop: hp(0.5)
    }
})

export { styles }