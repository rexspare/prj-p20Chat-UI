import { Dimensions, StyleSheet, Platform, PixelRatio } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

enum FONTS {
    THIN = "Inter-Thin",
    EXTRA_LIGHT = "Inter-ExtraLight",
    LIGHT = "Inter-Light",
    REGULAR = "Inter-Regular",
    MEDIUM = "Inter-Medium",
    SEMI_BOLD = "Inter-SemiBold",
    BOLD = "Inter-Bold",
    EXTRA_BOLD = "Inter-ExtraBold",
    BLACK = "Inter-Black",
}

enum SIZE {
    WIDTH = Dimensions.get('screen').width,
    HEIGHT = Dimensions.get('screen').height,
}

enum COLORS {
    PRIMARY = "#006B5F",
    SECONDARY = "#02AEAE",
    WHITE = "#FFFFFF",
    BLACK = "#000000",
    DISBALED = "#D9D9D9",
    RED = "#FF0000"
}

enum FONT_SIZE {
    _32 = hp(3.4),
    _24 = hp(2.5),
    _20 = hp(2.14),
    _18 = hp(1.9),
    _16 = hp(1.7),
    _14 = hp(1.5),
    _12 = hp(1.28),
}


const COMMON_STYLES = StyleSheet.create({
    main: {
        flex: 1,
    },
    mainPad: {
        flex: 1,
        paddingHorizontal: '3%',
    },
    center_: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

// based on iphone 5s's scale
const scale = SIZE.WIDTH / 320;

const normalize = (size: any) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        // return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
}

export {
    FONTS,
    SIZE,
    COLORS,
    COMMON_STYLES,
    hp,
    wp,
    normalize,
    FONT_SIZE
}