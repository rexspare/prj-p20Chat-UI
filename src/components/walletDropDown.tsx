import React, { useEffect, useState } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { BodyText, If } from '.';
import { COLORS, FONTS, FONT_SIZE, hp, normalize } from '../assets/stylesGuide';
import useAppConfig from '../hooks/AppConfig';
import { ITHEME } from '../models/config';
import { DownCaret } from '../assets/icons';

interface dropDownProps {
    title?: string;
    data?: any;
    onChangeDropdown?: (val: any) => any;
    containerStyles?: ViewStyle;
    editable?: boolean;
    iconName?: string;
    renderRightIcon?: any;
    placeholder?: string;
    isError?: boolean;
    onFocus?: () => {};
    dropdownPlaceholder?: string;
    value?: any
    enableSearch?: boolean
    hasInput?: boolean;
    selectedTextStyle?: TextStyle;
    tintColor?: string;
}

const WalletDropDown: React.FC<dropDownProps> = (props) => {
    const {
        data,
        onChangeDropdown = () => { },
        enableSearch = false,
        tintColor = COLORS.WHITE
    } = props

    const { theme, lang } = useAppConfig()
    const styles = styles_(theme)

    const [value, setValue] = useState<any>(data[0]);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        if (data?.length > 0) {
            setValue(data[0])
        }
    }, [data])

    return (
        <View style={[styles.main, props.containerStyles]}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, props.selectedTextStyle]}
                inputSearchStyle={styles.inputSearchStyle}
                containerStyle={styles.containerStyle}
                data={data}
                search={enableSearch}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    onChangeDropdown(item)
                    setIsFocus(false);
                }}
                renderRightIcon={() => (
                    <DownCaret
                        fill={tintColor}
                        width={hp(1.4)}
                        height={hp(1.1)}
                    />
                )}
                renderItem={(item: any, selected: any) => (
                    <View style={styles.item}>
                        <BodyText numberOfLines={1} style={styles.itemTxt}>{item?.label}</BodyText>
                    </View>
                )}
            />

        </View>

    )
}

export default React.memo(WalletDropDown)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: hp(13),
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: COLORS.WHITE,
        borderRadius: hp(85),
    },
    containerStyle: {
        borderWidth: 0,
        paddingVertical: hp(0.5),
        backgroundColor: theme.CHAP_POPUP,
        borderRadius: hp(1)
    },
    dropdown: {
        height: hp(3.85),
        width: '100%',
        paddingHorizontal: hp(1.4),
    },
    placeholderStyle: {
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR
    },
    selectedTextStyle: {
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE
    },
    inputSearchStyle: {
        height: 40,
        fontSize: FONT_SIZE._12,
        fontFamily: FONTS.REGULAR
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: hp(1),
        paddingVertical: hp(1.3),
        backgroundColor: theme.CHAP_POPUP
    },
    itemTxt: {
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR,
        color: theme.BLACK_TO_WHITE,
        marginLeft: 5,
    },
})