import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { BodyText, CustomSwitch, If, Label, PrimaryButton, SettingModal } from '..';
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from '../../assets/stylesGuide';
import { ChevDownIcon } from '../../assets/icons';

interface settingWithOptionItemProps {
    title: string;
    subtitle?: string;
    onPress?: Function;
    data?: any;
    onChangeDropdown?: Function;
    type?: string;
    dropDownTitle?: string;
    buttonTitle?: string;
    buttonPress?: Function;
}

const SettingWithOptionItem: React.FC<settingWithOptionItemProps> = (props) => {
    const {
        title,
        subtitle,
        onPress = () => { },
        data = [],
        onChangeDropdown = () => { },
        type,
        dropDownTitle = "",
        buttonTitle = "",
        buttonPress = () => { },
    } = props

    const [value, setValue] = useState<any>({ value: '1' });
    const [isVisible, setisVisible] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false)

    const getElementByType = () => {
        switch (type) {
            case "DROPDOWN":
                return (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setisVisible(true)}
                        style={styles.dropdown}>
                        <BodyText>{value?.label || data[0]?.label}</BodyText>
                        <ChevDownIcon />
                    </TouchableOpacity>
                )

            case "RADIO":
                return (
                    <View style={[styles.radioContainer, { width: '90%' }]}>
                        {
                            data.map((item: any, index: number) => (
                                <View style={styles.radioBtn} key={index}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => setValue(item)}
                                        style={[styles.radioOutter, {
                                            borderColor: value?.value == item?.value ? COLORS.PRIMARY : COLORS.DISABLED
                                        }]}>
                                        <If condition={value?.value == item?.value}>
                                            <View style={styles.radioInner}>
                                            </View>
                                        </If>
                                    </TouchableOpacity>
                                    <BodyText style={styles.radioTxt}>{item.label}</BodyText>
                                </View>
                            ))
                        }
                    </View>
                )

            case "SWITCH":
                return (
                    <View style={[styles.radioContainer, { width: '90%' }]}>
                        <CustomSwitch
                            isEnabled={isEnabled}
                            setIsEnabled={setIsEnabled}
                            type2={true}
                        />
                    </View>
                )


            case "RADIO_BIG":
                return (
                    <View style={[styles.radioContainer, { width: '90%' }]}>
                        {
                            data.map((item: any, index: number) => (
                                <View style={styles.radioBtn} key={index}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => setValue(item)}
                                        style={[styles.radioOutter2, {
                                            borderColor: value?.value == item?.value ? COLORS.PRIMARY : COLORS.BACKGROUND
                                        }]}>
                                        <View style={[styles.radioInner, { backgroundColor: COLORS.DISABLED }]}>
                                        </View>
                                    </TouchableOpacity>
                                    <BodyText style={styles.radioTxt}>{item.label}</BodyText>
                                </View>
                            ))
                        }
                    </View>
                )
            case "BUTTON":
                return (
                    <PrimaryButton
                        title={buttonTitle}
                        onPress={() => buttonPress()}
                        style={{ marginTop: hp(2), }}
                    />
                )

            default:
                return (
                    <></>
                )
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress()}
            style={styles.main}>
            <View style={styles.container}>
                <Label style={styles.title}>{title}</Label>
                <If condition={subtitle != undefined}>
                    <BodyText style={styles.subtitle}>{subtitle}</BodyText>
                </If>
            </View>

            {getElementByType()}

            <SettingModal
                title={dropDownTitle}
                isVisible={isVisible}
                onClose={() => setisVisible(false)}
                onSelect={setValue}
                data={data}
            />

        </TouchableOpacity>
    )
}

export default SettingWithOptionItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        marginVertical: hp(2)
    },
    container: {
        width: '95%',
    },
    title: {
        textAlign: 'left',
        marginVertical: 0,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: normalize(14.5)
    },
    subtitle: {
        textAlign: 'left',
        marginVertical: 0,
        marginTop: normalize(5),
        fontSize: normalize(11)
    },
    dropdown: {
        height: hp(6),
        width: '100%',
        borderColor: COLORS.DISABLED,
        borderWidth: 1.5,
        paddingHorizontal: '2%',
        borderRadius: 10,
        marginTop: hp(2),
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    placeholderStyle: {
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT

    },
    selectedTextStyle: {
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT
    },
    iconStyle: {
        width: normalize(22),
        height: normalize(17),
        tintColor: COLORS.TEXT
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
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT
    },
    radioContainer: {
        marginTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    radioBtn: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    radioOutter: {
        width: normalize(21),
        height: normalize(21),
        borderRadius: normalize(21),
        borderWidth: 1,
        padding: 2
    },
    radioOutter2: {
        width: normalize(36),
        height: normalize(36),
        borderRadius: normalize(21),
        borderWidth: 1,
        padding: 2
    },
    radioInner: {
        width: "100%",
        height: '100%',
        borderRadius: normalize(21),
        backgroundColor: COLORS.PRIMARY
    },
    radioTxt: {
        fontFamily: FONTS.MEDIUM,
        marginLeft: 10
    }
})