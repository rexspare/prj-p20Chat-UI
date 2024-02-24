import { Platform, Share } from "react-native"
import DeviceInfo from "react-native-device-info"
import { SIZE } from "../assets/stylesGuide"

const isIOS = () => {
    return Platform.OS == 'ios'
}

const hasNotch = () => {
    return DeviceInfo.hasNotch()
}

const isDeviceTablet = () => {
    let istab = false;
    let ratio = SIZE.HEIGHT / SIZE.WIDTH
    if (Platform.OS === 'ios') {
        istab = DeviceInfo.isTablet()
    } else {
        if (ratio > 1.6) {
            istab = false
        } else {
            istab = true;
        }
    }
    return istab
}

const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${minutes}:${sec}`

}

const checkTextPressable = (txt: string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i');

    if (txt.includes('#') ||
        txt.includes('$') ||
        txt.includes('@') ||
        !!pattern.test(txt)) {
        return true
    } else {
        return false
    }
}

const handleShare = async (txt: string) => {
    try {
        const result = await Share.share({
            message: `p20Chat | ${txt}`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
    }
}

const isDefaultThemeSupported = () => {
    const majorVersionIOS: any = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : undefined;
    const androidOsVer: any = Platform.OS !== 'ios' ? Platform.constants['Release'] : undefined;
    if (Platform.OS === 'ios') {
        return majorVersionIOS > 13 ? true : false
    } else {
        return androidOsVer > 9 ? true : false
    }
}

export {
    isIOS,
    hasNotch,
    isDeviceTablet,
    formatSeconds,
    checkTextPressable,
    handleShare,
    isDefaultThemeSupported
}