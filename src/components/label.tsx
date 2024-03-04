import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, hp, normalize } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';

interface labelProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle;
    numberOfLines?: number
}

const Label: React.FC<labelProps> = (props) => {
    const { children, size = FONT_SIZE._24, fontFamily = FONTS.BOLD, style = {} } = props
    const { theme } = useAppConfig()

    return (
        <Text
            {...props}
            allowFontScaling={false}
            style={{
                // fontFamily: fontFamily,
                fontWeight: '700',
                fontSize: size,
                color: theme.PRIMARY_TO_WHITE,
                textAlign: 'center',
                ...style
            }}
        >{children}</Text>
    )
}

export default React.memo(Label)

