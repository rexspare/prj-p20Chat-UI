import { FRIENDS_AVATARS } from "./dummy"

const IMAGES = {
    LANDING_ICON: require('./landingIcon.png'),
    LOGO_OPACITY_BG: require('./logoOpacityBG.png'),
    AVATAR: require('./avatar.png'),
    IMAGE_SHADOW: require('./imgShadow.png'),
    SCREEN_SHADOW: require('./screenShadow.png'),
    FADE_TICKET: require('./fadeTicket.png'),
    QR: require('./qr.png'),
    BLUR: require('./blur/blur.png'),
    BLUR_BIG: require('./blur/blurBig.png'),
    TRACK: require('./track.png'),
    TRANSPARENT_BG: require('./transparentbg.png'),
    WA_BG: require('./waBg.png'),
    WA_BG_TAB: require('./waBgTab.png'),
}

export * from './coins'
export * from './bgTypes'

export {
    IMAGES,
    FRIENDS_AVATARS
}