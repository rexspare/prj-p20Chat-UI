import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';

interface labelProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
}

const Label: React.FC<labelProps> = (props) => {
    const { children, size = normalize(18), fontFamily = FONTS.BOLD, style = {} } = props

    return (
        <Text
            allowFontScaling={false}
            style={{
                fontFamily: fontFamily,
                fontSize: size,
                color: COLORS.TEXT,
                textAlign: 'center',
                ...style
            }}>{children}</Text>
    )
}

export default Label

