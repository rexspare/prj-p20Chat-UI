import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';

interface labelProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
}

const Label: React.FC<labelProps> = (props) => {
    const { children, size = hp(2.4), fontFamily = FONTS.BOLD, style = {} } = props
    const { theme } = useAppConfig()

    return (
        <Text
            allowFontScaling={false}
            style={{
                fontFamily: fontFamily,
                fontSize: size,
                color: theme.PRIMARY_TO_WHITE,
                textAlign: 'center',
                ...style
            }}>{children}</Text>
    )
}

export default Label

