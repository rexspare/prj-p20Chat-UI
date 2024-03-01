import { useState } from 'react';
import { configStateSelectors, useConfig } from '../states/config';
import { LightTheme, DarkTheme } from '../assets/themes';
import { setItem } from '../services/asyncStorage';
import { ASYNC_KEYS, CHAT_FONT_SIZE, THEMES } from '../assets/constants';
import { isDefaultThemeSupported } from '../utils/myUtils';
import { Appearance } from 'react-native';

const useAppConfig = () => {
    const lang = useConfig(configStateSelectors.lang)
    const setLang = useConfig(configStateSelectors.setLang)
    const theme = useConfig(configStateSelectors.theme)
    const setTheme = useConfig(configStateSelectors.setTheme)
    const activetheme = useConfig(configStateSelectors.activetheme)
    const setActiveTheme = useConfig(configStateSelectors.setActiveTheme)
    const chatFontSize = useConfig(configStateSelectors.chatFontSize)
    const setChatFontSize = useConfig(configStateSelectors.setChatFontSize)

    const [isLoading, setisLoading] = useState<boolean>(false)

    const handleChangeTheme = async (theme: string) => {

        const DEFAULT_THEME = await Appearance.getColorScheme() as "light" | "dark"
        console.log("==>>", { theme });


        try {
            setisLoading(true)
            await setItem(ASYNC_KEYS.ACTIVE_THEME, theme)
            setActiveTheme(theme)
            switch (theme) {
                case THEMES.DEFAULT:
                    if (DEFAULT_THEME == 'light') {
                        setTheme(LightTheme)
                    } else {
                        setTheme(DarkTheme)
                    }
                    break;
                case THEMES.LIGHT:
                    setTheme(LightTheme)
                    break;
                case THEMES.DARK:
                    setTheme(DarkTheme)
                    break;

                default:
                    setTheme(LightTheme)
                    break;
            }
            setisLoading(false)
        } catch (error) {
            setisLoading(false)

        }

    }


    const handleChangeChatFont = async (font: string) => {
        try {
            setisLoading(true)
            await setItem(ASYNC_KEYS.CHAT_FONT_SIZE, font)
            setChatFontSize(font)

            switch (font) {
                case CHAT_FONT_SIZE.SMALL:

                    break;
                case CHAT_FONT_SIZE.MEDIUM:

                    break;
                case CHAT_FONT_SIZE.LARGE:

                    break;

                default:
                    break;
            }
            setisLoading(false)
        } catch (error) {
            setisLoading(false)

        }

    }
    return {
        isLoading,
        lang,
        theme,
        setTheme,
        activetheme,
        setActiveTheme,
        handleChangeTheme,
        chatFontSize,
        setChatFontSize,
        handleChangeChatFont
    };
};

export default useAppConfig;
