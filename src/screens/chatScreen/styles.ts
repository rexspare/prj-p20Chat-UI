import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME, marginValue: any, radiusValue: any) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK
    },
    container: {
        borderTopLeftRadius: hp(3.5),
        borderTopRightRadius: hp(3.5),
        overflow: 'hidden',
        flex: 1,
        backgroundColor: theme.BACKGROUND,
        marginBottom: marginValue,
        borderBottomLeftRadius: radiusValue,
        borderBottomRightRadius: radiusValue,
    },
    contentContainerStyle: {
        marginTop: hp(1),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%'
    },
    aboluteContainer: {
        position: 'absolute',
        bottom: (isIOS() && hasNotch()) ? hp(3.5) : hp(2),
        width: '100%',
        alignItems: 'center'
    },
    aboluteContainer1: {
        position: 'absolute',
        bottom: (isIOS() && hasNotch()) ? hp(3) : hp(2),
        width: '100%',
        alignItems: 'center',
        zIndex: -10
    }
})

export { styles }