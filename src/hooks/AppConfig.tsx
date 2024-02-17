import { useState } from 'react';
import { configStateSelectors, useConfig } from '../states/config';
import { LightTheme, DarkTheme } from '../assets/themes';

const useAppConfig = () => {
    const lang = useConfig(configStateSelectors.lang)
    const setLang = useConfig(configStateSelectors.setLang)
    const theme = useConfig(configStateSelectors.theme)
    const setTheme = useConfig(configStateSelectors.setTheme)

    const [isLoading, setisLoading] = useState<boolean>(false)

    return {
        isLoading,
        lang,
        theme
    };
};

export default useAppConfig;
