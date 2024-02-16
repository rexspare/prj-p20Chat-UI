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

    // THIN = "Gilroy-Thin",
    // EXTRA_LIGHT = "Gilroy-UltraLight",
    // LIGHT = "Gilroy-Light",
    // REGULAR = "Gilroy-Regular",
    // MEDIUM = "Gilroy-Medium",
    // SEMI_BOLD = "Gilroy-SemiBold",
    // BOLD = "Gilroy-Bold",
    // EXTRA_BOLD = "Gilroy-ExtraBold",
    // BLACK = "Gilroy-Black",
}

enum SIZE {
    WIDTH = Dimensions.get('screen').width,
    HEIGHT = Dimensions.get('screen').height,
}

enum COLORS {
    PRIMARY = "#31A08A",
    SECONDARY = "#11C19E",
    PRIMARY_OPACITY = "rgba(49, 160, 138, 0.1)",
    BACKGROUND = "#FFFFFF",
    WHITE = "#FFFFFF",
    TEXT = "#24272A",
    BLACK = "#000000",
    DISABLED = "#D6D9DC",
    LINK = "#3348FF",
    TAB = "#D9D9D9",
    PURPLE = "#9747FF",
    PARROT = "#B8DB2D",
    PINK = "#FF47AA",
    SUBTLE = "#24272A",
    BODY = "#494949",
    BLACK_OPACITY = "rgba(0,0,0,0.25)",
    DISABLED_OPACITY = "rgba(217, 217, 217, 0.2)",
    RED = "#FF0000"
}


const COMMON_STYLES = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND
    },
    mainPad: {
        flex: 1,
        paddingHorizontal: '3%',
        backgroundColor: COLORS.BACKGROUND,
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
    normalize
}