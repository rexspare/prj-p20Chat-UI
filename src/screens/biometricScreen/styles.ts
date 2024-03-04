import { View, StyleSheet, Dimensions } from 'react-native';
import { wp, hp, COLORS, FONT_SIZE, FONTS } from '../../assets/stylesGuide';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        width: '100%',
        height: '100%'
    },
    absoluteContainer: {
        position: 'absolute',
        width: '100%',
        bottom: hp(8),
    },
    outer: {
        width: wp(70),
        maxWidth: 400,
        height: hp(1),
        borderRadius: hp(1),
        overflow: 'hidden',
        alignSelf: 'center',
        backgroundColor: COLORS.DISBALED,
        marginVertical: hp(0.5)
    },
    progressBar: {
        height: '100%',
        backgroundColor: COLORS.SECONDARY,
    },
    percentageText: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._20
    },
    txt: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._16,
        fontWeight: '400'
    },
    icon: {
        alignSelf: 'center',
    },
    icon2: {
        alignSelf: 'center',
        marginTop: hp(12)
    },
    txt1: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._18,
        marginTop: hp(2),
        marginBottom: hp(4),
    },
    txt2: {
        fontWeight: '600',
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._24,
        marginTop: hp(2),
    }
});

export { styles }