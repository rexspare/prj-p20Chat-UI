import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';

interface bodyTextProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
}

const BodyText: React.FC<bodyTextProps> = (props) => {
    const { children, size = hp(1.6), fontFamily = FONTS.REGULAR, style = {} } = props
    const { theme } = useAppConfig()

    return (
        <Text
            {...props}
            allowFontScaling={false}
            style={{
                fontFamily: fontFamily,
                fontSize: size,
                color: theme.BLACK_TO_WHITE,
                textAlign: 'center',
                marginVertical: 0,
                ...style
            }}
        >{children}</Text>
    )
}

export default BodyText

