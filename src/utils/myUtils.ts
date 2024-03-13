import { Platform, Share } from "react-native"
import DeviceInfo from "react-native-device-info"
import { SIZE } from "../assets/stylesGuide"
import moment from "moment"

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
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;

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

const nextIndexExists = (array: any[], index: number) => {
    if (typeof array[index + 1] === 'undefined') {
        return false
    }
    else {
        return true
    }
}

const generateRandomId = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}


const getBubbleDate = (unixTimestamp: number, type: 'time' | 'date') => {
    const momentObj = moment.unix(unixTimestamp);

    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');

    if (type == 'time') {
        // Display time in "hh:mm A" format
        const formattedTime = momentObj.format('hh:mm A');
        return formattedTime
    } else {
        // Display date in "DD/MM/YY" format
        const formattedDate = momentObj.format('DD/MM/YYYY');
        if (momentObj.isSame(today, 'day')) {
            return "Today"
        } else if (momentObj.isSame(yesterday, 'day')) {
            return "Yesterday";
        }
        return formattedDate
    }
}

const formatDate = (inputDate: string) => {
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');
    const inputMoment = moment(inputDate, 'YYYY-MM-DD');
  
    if (inputMoment.isSame(today, 'd')) {
      return 'Today';
    } else if (inputMoment.isSame(yesterday, 'd')) {
      return 'Yesterday';
    } else {
      return inputMoment.format('DD/MM/YYYY');
    }
}

export {
    isIOS,
    hasNotch,
    isDeviceTablet,
    formatSeconds,
    checkTextPressable,
    handleShare,
    isDefaultThemeSupported,
    nextIndexExists,
    generateRandomId,
    getBubbleDate,
    formatDate
}