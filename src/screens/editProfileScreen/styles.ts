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
    },
    contentContainerStyle: {
        marginTop: hp(0.5)
    },
    avatarContainer: {
        width: hp(21.5),
        height: hp(21.5),
        borderRadius: hp(21.5),
        borderWidth: 4,
        borderColor: COLORS.SECONDARY,
        alignSelf: 'center',
        ...COMMON_STYLES.center_,
        marginTop: hp(4),
        marginBottom: hp(6),
    },
    avatar: {
        width: '94%',
        height: '94%',
        borderRadius: hp(21.5),
    },
    camIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

export { styles }