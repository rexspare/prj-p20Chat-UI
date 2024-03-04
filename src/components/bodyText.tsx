import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, hp, normalize } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';

interface bodyTextProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
}

const BodyText: React.FC<bodyTextProps | any> = (props) => {
    const { children, size = FONT_SIZE._16, fontFamily = FONTS.REGULAR, style = {} } = props
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

export default React.memo(BodyText)

