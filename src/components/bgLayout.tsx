import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAppConfig from '../hooks/AppConfig';
import { ITHEME } from '../models/config';
import If from './if';
import { isDeviceTablet } from '../utils/myUtils';
import { IMAGES } from '../assets/images';
interface ILayoutProps {
    containerStyle?: StyleProp<ViewStyle>;
    bgStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    fixed?: boolean;
    children?: any;
    safeArea?: boolean;
}

const BgLayout: React.FC<ILayoutProps> = ({
    children,
    containerStyle,
    bgStyle,
    fixed,
    contentContainerStyle,
}) => {
    const { theme } = useAppConfig()
    const styles = styles_(theme)

    return (
        <>
            <If condition={fixed}>
                <View
                    style={[styles.main, containerStyle]}>
                    <ImageBackground
                        source={isDeviceTablet() ? IMAGES.WA_BG_TAB : IMAGES.WA_BG}
                        style={[styles.bg, bgStyle]}
                    >
                        {children}
                    </ImageBackground>
                </View>
            </If>
            <If condition={!fixed}>
                <KeyboardAwareScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    style={[styles.main, containerStyle]}
                    contentContainerStyle={contentContainerStyle}>
                    {children}
                </KeyboardAwareScrollView>
            </If>
        </>
    );
};

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: theme.BACKGROUND
    },
    bg: {
        width: '100%',
        height: '100%',
    }
})

export default BgLayout;
