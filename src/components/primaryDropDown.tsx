import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IMAGES } from '../assets/images';
import { COLORS, FONTS, hp, normalize } from '../assets/stylesGuide';
import { BodyText, If } from '.';
import { Icon } from 'react-native-vector-icons/Icon';

interface dropDownPros {
    title?: string;
    data?: any;
    onChangeInput?: (txt: any) => any;
    onChangeDropdown?: (val: any) => any;
    isPassword?: Boolean;
    containerStyles?: ViewStyle;
    inputStyles?: any;
    inputContainer?: ViewStyle;
    inputvalue?: any;
    keyboardType?: string;
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
    value?: any
    enableSearch?: boolean
    hasInput?: boolean
}

const PrimaryDropDown: React.FC<dropDownPros> = (props) => {
    const {
        data,
        inputvalue,
        onChangeInput = () => { },
        onChangeDropdown = () => { },
        enableSearch = true,
        hasInput = false,
        keyboardType = 'default'
    } = props

    const [value, setValue] = useState<any>(null);
    const [isFocus, setIsFocus] = useState(false);

    const getIcon = () => {
        if (value != null) {
            const exists = data?.find((x: any) => x.value == value)
            if (exists) {
                return exists?.icon ? exists?.icon : null
            } else {
                return null
            }
        } else {
            return null
        }
    }

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
            <View style={[styles.main2,]}>

                <Dropdown
                    style={[styles.dropdown, hasInput ? {
                        width: '40%',
                        borderColor: COLORS.DISABLED,
                        borderRightWidth: 1.5,
                    } : {}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search={enableSearch}
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
                        getIcon() != null ?
                            <View style={{
                                marginRight: 6
                            }}>
                                {getIcon()}
                            </View>
                            :
                            null
                    )}
                    renderItem={(item: any, selected: any) => (
                        <View style={styles.item}>
                            <If condition={item?.icon != undefined}>
                                {item.icon}
                            </If>
                            <BodyText style={styles.itemTxt}>{item?.label}</BodyText>
                        </View>
                    )}
                />

                <If condition={hasInput}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={COLORS.DISABLED}
                        placeholder='00'
                        keyboardType={keyboardType || 'default'}
                        value={inputvalue}
                        onChangeText={(txt) => onChangeInput(txt)}
                    />
                </If>
            </View>
        </View>

    )
}

export default React.memo(PrimaryDropDown)

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: COLORS.BACKGROUND,
    },
    main2: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: COLORS.BACKGROUND,
        borderWidth: 1.5,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: COLORS.DISABLED,
    },

    dropdown: {
        height: hp(6),
        width: '100%',
        paddingHorizontal: '2%',
    },
    placeholderStyle: {
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR
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
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 5
    },
    itemTxt: {
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT,
        marginLeft: 5,
    },
    input: {
        height: hp(6),
        width: '60%',
        paddingHorizontal: '2%',
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT,
        textAlign: 'right',
    },
    titleContainer: {
    },
    title: {
        marginBottom: 4,
        textAlign: 'left',
        fontFamily: FONTS.MEDIUM,
    },


})