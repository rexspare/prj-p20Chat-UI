import { useState } from 'react';
import { configStateSelectors, useConfig } from '../states/config';

const useAppConfig = () => {
    const lang = useConfig(configStateSelectors.lang)
    const setLang = useConfig(configStateSelectors.setLang)
    const [isLoading, setisLoading] = useState<boolean>(false)

    return {
        isLoading,
        lang
    };
};

export default useAppConfig;
