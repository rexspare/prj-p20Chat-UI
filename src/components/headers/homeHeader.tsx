import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, Label, PrimaryInput } from '..';
import { BackIcon, DeletecIcon, MuteIcon, SearchIcon, VerticalDotsIcon } from '../../assets/icons';
import { COLORS, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';
import { SCREENS } from '../../assets/constants';
interface homeHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
    setblockModalVisible?: Function;
    setmuteModalVisible?: Function;
}

const HomeHeader: FC<homeHeaderProps> = (props) => {
    const {
        hideBackBtn = false,
        title,
        setblockModalVisible = () => { },
        setmuteModalVisible = () => { }
    } = props

    const navigation = useNavigation()
    const menuRef = useRef<Menu>(null)

    const { theme, lang } = useAppConfig()
    const [showSearch, setshowSearch] = useState(false)
    const [searchVal, setsearchVal] = useState('')
    const setselectedChats = useInbox(inboxStateSelectors.setselectedChats)
    const selectedChats = useInbox(inboxStateSelectors.selectedChats)
    const chatList = useInbox(inboxStateSelectors.chatList)
    const filteredChatList = useInbox(inboxStateSelectors.filteredChatList)
    const setfilteredChatList = useInbox(inboxStateSelectors.setfilteredChatList)
    const setselectedConatct = useInbox(inboxStateSelectors.setselectedConatct)

    const showSelectedContent = selectedChats?.length > 0

    const styles = styles_(theme, showSelectedContent)

    const MainMenuList: any[] = [
        {
            id: 1,
            name: lang["_29"],
            onPress: () => navigation.navigate(SCREENS.GROUP)

        },
        {
            id: 2,
            name: lang["_30"],
            onPress: () => navigation.navigate(SCREENS.STARED)
        },
        {
            id: 3,
            name: lang["_31"],
            onPress: () => navigation.navigate(SCREENS.SETTING)
        },
    ]

    const SelectContactMenuList: any[] = [
        {
            id: 1,
            name: lang["_32"],
            onPress: () => handleViewContact()
        },
        {
            id: 2,
            name: lang["_33"]
        },
        {
            id: 3,
            name: lang[selectedChats.length == chatList.length ? "_36" : "_34"],
            onPress: () => selectAll()
        },
        {
            id: 4,
            name: lang["_35"],
            onPress: () => setblockModalVisible(true)
        },
    ]

    const selectAll = () => {
        if (selectedChats.length == chatList.length) {
            setselectedChats([])
        } else {
            setselectedChats(chatList)
        }
    }

    const handleBackPress = () => {
        if (showSearch) {
            setshowSearch(false)
            return
        }
        if (showSelectedContent) {
            setselectedChats([])
            return
        }
    }

    const handleSearch = (val: string) => {
        if (val != '') {
            const filtered = chatList.filter((x: any) => (
                x?.name?.toString()?.toUpperCase().includes(val?.toString()?.toUpperCase())
            ))
            setfilteredChatList(filtered)
        } else {
            setfilteredChatList(chatList)
        }
        setsearchVal(val)
    }

    const handleViewContact = () => {
        if (showSelectedContent) {
            setselectedConatct(selectedChats[0])
            navigation.navigate(SCREENS.USER_PROFILE)
        }
    }

    return (
        <>
            <View style={styles.main}>

                {
                    (showSelectedContent || showSearch) ?
                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                            onPressIn={() => handleBackPress()}
                        >
                            <BackIcon
                                fill={theme.WHITE_TO_BLACK}
                                width={hp(2.4)}
                                height={hp(2)}
                            />
                        </TouchableOpacity>

                        :
                        <Label style={styles.title}>{title}</Label>
                }


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
                                showSelectedContent ?
                                    <>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                            style={styles.btnContainer1}
                                        >
                                            <DeletecIcon
                                                fill={COLORS.WHITE}
                                                width={hp(1.6)}
                                                height={hp(2.14)} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                            style={styles.btnContainer}
                                            onPressIn={() => setmuteModalVisible(true)}
                                        >
                                            <MuteIcon width={hp(2.14)} height={hp(2.14)} />
                                        </TouchableOpacity>
                                    </>
                                    :
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
                                        (showSelectedContent ? SelectContactMenuList : MainMenuList).map((item, index) => (
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

export default HomeHeader

const styles_ = (theme: ITHEME, showSelectedContent: boolean) => StyleSheet.create({
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
        fontSize: FONT_SIZE._20,
        fontWeight: '400'
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
        paddingRight: showSelectedContent ? hp(3) : hp(1.5),
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
    }
})