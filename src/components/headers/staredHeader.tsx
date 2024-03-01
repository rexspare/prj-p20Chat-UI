import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, If, Label, PrimaryInput } from '..';
import { BackIcon, SearchIcon, VerticalDotsIcon } from '../../assets/icons';
import { COLORS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';

interface staredHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
    setblockModalVisible?: Function;
    setmuteModalVisible?: Function;
    list?: any[],
    setList?: Function;
}

const StaredHeader: FC<staredHeaderProps> = (props) => {
    const {
        title,
        setblockModalVisible = () => { },
        setmuteModalVisible = () => { },
        list = [],
        setList = () => { }
    } = props

    const navigation = useNavigation()
    const menuRef = useRef<Menu>(null)

    const { theme, lang } = useAppConfig()
    const [showSearch, setshowSearch] = useState(false)
    const [searchVal, setsearchVal] = useState('')



    const styles = styles_(theme)

    const MainMenuList: any[] = [

    ]


    const handleBackPress = () => {
        if (showSearch) {
            setshowSearch(false)
            return
        }
        navigation.goBack()
    }

    const handleSearch = (val: string) => {
        if (val != '') {
            const filtered = list.filter((x: any) => (
                x?.message?.toString()?.toUpperCase().includes(val?.toString()?.toUpperCase())
            ))
            setList(filtered)
        } else {
            setList(list)
        }
        setsearchVal(val)
    }

    return (
        <>
            <View style={styles.main}>

                <If condition={title != undefined && showSearch == false}>
                    <View style={styles.titleContainer}>
                        <Label style={styles.title}>{title}</Label>
                    </View>
                </If>

                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    onPressIn={() => handleBackPress()}
                >
                    <BackIcon
                        fill={COLORS.WHITE}
                        width={hp(2.4)}
                        height={hp(2)}
                    />
                </TouchableOpacity>

                {
                    showSearch ?
                        <PrimaryInput
                            hideTitle={true}
                            value={searchVal}
                            placeholder={lang['_37']}
                            onChange={(txt) => handleSearch(txt)}
                            containerStyles={styles.inputcontainerStyles}
                            inputStyles={styles.inputStyles}
                            renderLeftIcon={<SearchIcon
                                fill={theme.ACCENT}
                                width={hp(2)}
                                height={hp(2)} />}
                        />
                        :
                        <View style={styles.leftRowContainer}>
                            {
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                    style={styles.btnContainer}
                                    onPressIn={() => setshowSearch(true)}
                                >
                                    <SearchIcon
                                        fill={COLORS.WHITE}
                                        width={hp(2.14)}
                                        height={hp(2.14)} />
                                </TouchableOpacity>
                            }

                            {/* VERTICAL DOTS MENU */}
                            <Menu ref={menuRef}>
                                <MenuTrigger>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                        onPressIn={() => menuRef?.current?.open()}
                                    >
                                        <VerticalDotsIcon height={hp(2.46)} />
                                    </TouchableOpacity>
                                </MenuTrigger>
                                <MenuOptions
                                    optionsContainerStyle={styles.optionsContainerStyle}
                                >
                                    {
                                        (MainMenuList).map((item, index) => (
                                            <MenuOption
                                                key={index}
                                                onSelect={() => item?.onPress && item?.onPress()} >
                                                <BodyText style={styles.menuTxt}>{item.name}</BodyText>
                                            </MenuOption>
                                        ))
                                    }
                                </MenuOptions>
                            </Menu>

                        </View>
                }
            </View >
        </>
    )
}

export default StaredHeader

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : hp(1),
        marginBottom: hp(1.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    txtContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btnContainer: {
        marginHorizontal: hp(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._18
    },
    leftRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    optionsContainerStyle: {
        width: 'auto',
        marginTop: hp(3),
        borderRadius: hp(1.5),
        backgroundColor: theme.CHAP_POPUP,
        paddingVertical: hp(1)
    },
    menuTxt: {
        textAlign: 'left',
        paddingLeft: hp(1.5),
        paddingVertical: hp(0.75),
        fontSize: FONT_SIZE._16,
    },
    inputcontainerStyles: {
        width: '90%',
        flexShrink: 1,
        borderRadius: hp(1)
    },
    inputStyles: {
        height: hp(5.3)
    },
    titleContainer: {
        position: 'absolute',
        width: wp(100)
    },
})