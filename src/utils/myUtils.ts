import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"

const isIOS = () => {
    return Platform.OS == 'ios'
}

const hasNotch =() => {
    return DeviceInfo.hasNotch()
}

export {
    isIOS,
    hasNotch
}