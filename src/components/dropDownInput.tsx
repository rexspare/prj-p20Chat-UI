import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IMAGES } from '../assets/images';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';

interface dropDownInputPros {
    title?: string;
    data?: any;
    onChangeInput: (txt: any) => any;
    onChangeDropdown: (val: any) => any;
    isPassword?: Boolean;
    containerStyles?: ViewStyle;
    inputStyles?: any;
    inputContainer?: ViewStyle;
    inputvalue?: any;
    keyboardType?: any;
    titleStyles?: TextStyle;
    editable?: boolean;
    hideTitle?: boolean;
    iconName?: string;
    multiline?: boolean;
    renderRightIcon?: any;
    placeholder?: string;
    isError?: boolean;
    inputRef?: any;
    maxLength?: number;
    onFocus?: () => {};
    dropdownPlaceholder?: string;
}

const DropDownInput: React.FC<dropDownInputPros> = (props) => {
    const {
        data,
        inputvalue,
        onChangeInput = () => { },
        onChangeDropdown = () => { },
        keyboardType
    } = props
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={[styles.main, props.containerStyles]}>
            <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Token' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    onChangeDropdown(item)
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    value == null ?
                        null
                        :
                        <Image
                            source={IMAGES.PVT}
                            style={{
                                width: normalize(17),
                                height: normalize(17),
                                marginRight: 6
                            }}
                        />
                )}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.SECONDARY}
                placeholder='$0.00'
                value={inputvalue}
                keyboardType={keyboardType}
                onChangeText={(txt) => onChangeInput(txt)}
            />
        </View>
    )
}

DropDownInput.defaultProps = {
    title: 'title',
    onChange: () => { },
    isPassword: false,
    value: 'value',
    keyboardType: 'default',
    editable: true,
    titleStyles: {}
}

export default React.memo(DropDownInput)

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 11,
        backgroundColor: COLORS.BACKGROUND,
        borderWidth: 1.5,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: COLORS.DISABLED,
    },

    dropdown: {
        height: hp(6),
        width: '50%',
        borderColor: COLORS.DISABLED,
        borderRightWidth: 1.5,
        paddingHorizontal: '2%',
    },
    placeholderStyle: {
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR,
        color: COLORS.BLACK
    },
    selectedTextStyle: {
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT
    },
    iconStyle: {
        width: normalize(17),
        height: normalize(17),
    },
    inputSearchStyle: {
        height: 40,
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR
    },
    input: {
        height: hp(6),
        width: '50%',
        paddingHorizontal: '2%',
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR,
        color: COLORS.SECONDARY
    }

})