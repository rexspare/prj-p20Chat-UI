import { StyleSheet, Text, TextInput, View, ViewStyle, TouchableOpacity, TextStyle } from 'react-native'
import React, { useState } from 'react'
import If from './if';
import Feather from 'react-native-vector-icons/Feather'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize } from '../assets/stylesGuide';
import { BodyText } from '.';
import BottomSheet from 'reanimated-bottom-sheet';

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
}

const PrimaryInput: React.FC<primaryInputPros> = (props) => {
    const { onPressRightIcon = () => { } } = props
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
            <View style={[styles.container,
            props.inputContainer,
            {
                borderColor: isFocused ? COLORS.PRIMARY : COLORS.DISABLED,
                paddingLeft: props?.renderLeftIcon ? 10 : 0
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
                    onChangeText={(txt) => props.onChange(txt)}
                    onEndEditing={(e) => console.log(e.nativeEvent.text)}
                    keyboardType={props.keyBoardType}
                    editable={props.editable}
                    placeholder={props?.placeholder || ""}
                    multiline={props.multiline == true ? true : false}
                    onFocus={() => setisFocused(true)}
                    onBlur={() => setisFocused(false)}
                    {...props}
                />

                <If condition={props.isPassword == true}>
                    <TouchableOpacity style={styles.eyeBtn}
                        activeOpacity={0.8}
                        onPress={() => props?.renderRightIcon ? onPressRightIcon() : setisSecureTextEntry(!isSecureTextEntry)}
                    >
                        {
                            props?.renderRightIcon ?
                                props?.renderRightIcon :
                                <Feather
                                    name={props?.iconName ? props?.iconName : isSecureTextEntry ? 'eye' : 'eye-off'}
                                    color={COLORS.DISABLED}
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

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 11,
        backgroundColor: COLORS.BACKGROUND,
    },
    title: {
        marginBottom: 4,
        textAlign: 'left',
        fontFamily: FONTS.MEDIUM,
    },
    container: {
        borderWidth: 1.5,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: COLORS.DISABLED,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: hp(6),
        paddingHorizontal: 10,
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT
    },
    eyeBtn: {
        ...COMMON_STYLES.center_,
        paddingHorizontal: 10
    },
    titleContainer: {
    }
})