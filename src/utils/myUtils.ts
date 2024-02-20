import { Platform } from "react-native"
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


export {
    isIOS,
    hasNotch,
    isDeviceTablet,
    formatSeconds
}