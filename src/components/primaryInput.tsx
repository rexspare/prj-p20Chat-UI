import React, { useState } from 'react';
import { StyleSheet, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { BodyText } from '.';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';
import { ITHEME } from '../models/config';
import If from './if';

interface primaryInputPros {
    title?: string;
    onChange?: (txt: any) => any;
    isPassword?: Boolean;
    containerStyles?: ViewStyle;
    inputStyles?: any;
    inputContainer?: ViewStyle;
    value?: any;
    keyBoardType?: any;
    titleStyles?: TextStyle;
    editable?: boolean;
    hideTitle?: boolean;
    iconName?: string;
    multiline?: boolean;
    renderRightIcon?: any;
    renderLeftIcon?: any;
    placeholder?: string;
    isError?: boolean;
    inputRef?: any;
    maxLength?: number;
    onFocus?: () => {};
    onPressRightIcon?: () => void;
    highlight?: boolean;
}

const PrimaryInput: React.FC<primaryInputPros> = (props) => {
    const {
        onPressRightIcon = () => { },
        onChange = () => { },
        highlight = false
    } = props
    const { theme } = useAppConfig()
    const styles = styles_(theme)

    const [isSecureTextEntry, setisSecureTextEntry] = useState<boolean>(true)
    const [isFocused, setisFocused] = useState<boolean>(false)

    return (
        <View style={[styles.main, props.containerStyles]}>
            <If condition={props.hideTitle != true}>
                <View style={styles.titleContainer}>
                    <BodyText style={{
                        ...styles.title,
                        ...props.titleStyles
                    }}>{props.title}</BodyText>
                </View>
            </If>
            {/* TEXT INPUT */}
            <View style={[
                styles.container,
                props.inputContainer,
                {
                    paddingLeft: props?.renderLeftIcon ? 10 : 0,
                    ...((highlight && isFocused) && { borderColor: COLORS.SECONDARY })
                }]}>

                <If condition={props.renderLeftIcon != undefined}>
                    {props?.renderLeftIcon}
                </If>

                <TextInput
                    ref={props.inputRef}
                    style={[
                        styles.input,
                        props.inputStyles,
                        props.multiline == true ? { textAlignVertical: 'top' } : {}
                    ]}
                    value={props.value || ""}
                    secureTextEntry={props?.renderRightIcon ? false : props?.iconName ? false : props.isPassword == true ? isSecureTextEntry : false}
                    onChangeText={(txt) => onChange(txt)}
                    onEndEditing={(e) => console.log(e.nativeEvent.text)}
                    keyboardType={props.keyBoardType}
                    editable={props.editable}
                    placeholder={props?.placeholder || ""}
                    placeholderTextColor={theme.ACCENT}
                    multiline={props.multiline == true ? true : false}
                    onFocus={() => setisFocused(true)}
                    onBlur={() => setisFocused(false)}
                    {...props}
                />

                <If condition={props.isPassword == true}>
                    <TouchableOpacity style={styles.eyeBtn}
                        activeOpacity={0.8}
                        onPressIn={() => props?.renderRightIcon ? onPressRightIcon() : setisSecureTextEntry(!isSecureTextEntry)}
                    >
                        {
                            props?.renderRightIcon ?
                                props?.renderRightIcon :
                                <Feather
                                    name={props?.iconName ? props?.iconName : isSecureTextEntry ? 'eye' : 'eye-off'}
                                    color={theme.ACCENT}
                                    size={21} />

                        }
                    </TouchableOpacity>

                </If>

            </View>
        </View>
    )
}

PrimaryInput.defaultProps = {
    title: 'title',
    onChange: () => { },
    isPassword: false,
    value: 'value',
    keyBoardType: 'default',
    editable: true,
    titleStyles: {}
}

export default React.memo(PrimaryInput)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        maxWidth: 700,
        alignSelf: 'center',
        marginVertical: 11,
        backgroundColor: theme.BACKGROUND,
    },
    title: {
        marginBottom: 4,
        textAlign: 'left',
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._14
    },
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: hp(1),
        borderColor: theme.BORDER,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: hp(5.5),
        paddingHorizontal: 10,
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR,
        color: theme.BLACK_TO_WHITE,
    },
    eyeBtn: {
        ...COMMON_STYLES.center_,
        paddingHorizontal: 10
    },
    titleContainer: {
    }
})