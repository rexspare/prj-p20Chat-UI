import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';

interface bodyTextProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
}

const BodyText: React.FC<bodyTextProps> = (props) => {
    const { children, size = normalize(11), fontFamily = FONTS.REGULAR, style = {} } = props

    return (
        <Text
            {...props}
            allowFontScaling={false}
            style={{
                fontFamily: fontFamily,
                fontSize: size,
                color: COLORS.TEXT,
                textAlign: 'center',
                marginVertical: hp(1),
                ...style
            }}
        >{children}</Text>
    )
}

export default BodyText

