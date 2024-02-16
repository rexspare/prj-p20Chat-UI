import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        paddingTop: hp(7),
        paddingBottom: hp(4)
    },
    absoluteConatiner: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    container: {
        paddingHorizontal: '4%',
        alignItems: 'center'
    },
    txt: {
        fontSize: normalize(15),
        marginVertical: 0,
        fontFamily: FONTS.MEDIUM
    },
    txt1: {
        fontSize: normalize(11),
        marginVertical: 0,
        marginTop: hp(2)
    },
    txt2: {
        fontSize: normalize(11),
        marginVertical: 0,
        color: COLORS.SECONDARY,
        fontFamily: FONTS.MEDIUM,
        marginTop: hp(1)
    },
    txt3: {
        fontSize: normalize(9),
        marginVertical: 0,
        marginTop: hp(5)
    },
    box: {
        borderWidth: 2,
        padding: 12,
        borderColor: COLORS.DISABLED,
        borderRadius: 10,
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(1)
    },
    txt4: {
        fontSize: normalize(11),
        marginVertical: 0,
        color: COLORS.SECONDARY,
        fontFamily: FONTS.SEMI_BOLD,
        marginRight: 15
    },
    txt5: {
        fontSize: normalize(9),
        marginVertical: 0,
        color: COLORS.SECONDARY,
    }
})

export {
    styles
}