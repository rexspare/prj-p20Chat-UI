import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAppConfig from '../hooks/AppConfig';
import { ITHEME } from '../models/config';
import If from './if';
interface ILayoutProps {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    fixed?: boolean;
    children?: any;
    safeArea?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    containerStyle,
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
                    {children}
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
    }
})

export default React.memo(Layout);
