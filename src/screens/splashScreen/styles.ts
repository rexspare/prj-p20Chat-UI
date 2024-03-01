import { StyleProp, StyleSheet } from "react-native";
import { FONTS, FONT_SIZE, hp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: hp(32),
        height: hp(32),
        resizeMode: 'contain',
        alignSelf: 'center',
    },

})

export { styles }