enum SCREENS {
    AUTH = "AUTH",
    APP = "APP",
    SPLASH = "SPLASH",
    LANDING = "LANGING",
    PHONE = "PHONE",
    OTP = "OTP",
    PROFILE_NAME = "PROFILE_NAME",
    PROFILE_IMAGE = "PROFILE_IMAGE",
    FACE_SETUP = "FACE_SETUP",
    HOME = "HOME",
    MESSAGES = "MESSAGES",
    CALLS = "CALLS",
    WALLET = "WALLET",
    CONTACTS = "CONTACTS",
    NEWS = "NEWS",
    CHAT = "CHAT",
    NEWS_DETAIL = "NEWS_DETAIL",
    WALLET_HOME = "WALLET_HOME",
    SEND = "SEND",
    SEND_SUMMARY = "SEND_SUMMARY",
    SEND_SUCCESS = "SEND_SUCCESS",
    TRANSACTION_HISTORY = "TRANSACTION_HISTORY",
    HISTORY_SETTING = "HISTORY_SETTING",
    RECIEVE = "RECIEVE",
    SETTING = "SETTING",
    EDIT_PROFILE = "EDIT_PROFILE",
    DISPLAY_SETTING = "DISPLAY_SETTING",
    CHAT_SETTING = "CHAT_SETTING",
    LANG_SETTING = "LANG_SETTING",
    NOTIFICATION_SETTING = "NOTIFICATION_SETTING",
    SECURITY_SETTING = "SECURITY_SETTING",
    WALLPAPER_SETTING = "WALLPAPER_SETTING",
    BLOCKED_CONTACTS = "BLOCKED_CONTACTS",
    USER_PROFILE = "USER_PROFILE",
    GROUP = "GROUP",
    VIDEO_CALL = "VIDEO_CALL",
    AUDIO_CALL = "AUDIO_CALL",
    STARED = "STARED",
}

enum ASYNC_KEYS {
    ACTIVE_THEME = "@ACTIVE_THEME",
    CHAT_FONT_SIZE = "@CHAT_FONT_SIZE"
}

enum ROUTES {

}

enum THEMES {
    DEFAULT = "Default",
    LIGHT = "Light",
    DARK = "Dark"
}

enum CHAT_FONT_SIZE {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}

enum MESSAGE_TYPES {
    TEXT = "text",
    VIDEO = "video",
    AUDIO = "audio",
    IMAGE = "image",
    DOCUMENT = "document"
}

export {
    SCREENS,
    ASYNC_KEYS,
    ROUTES,
    THEMES,
    CHAT_FONT_SIZE,
    MESSAGE_TYPES
}