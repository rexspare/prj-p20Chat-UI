import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, If, Label, PrimaryInput } from '..';
import { BackIcon, CallIcon, SearchIcon, VerticalDotsIcon, VideoIcon } from '../../assets/icons';
import { COLORS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';

interface chatHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
    setblockModalVisible?: Function;
    setmuteModalVisible?: Function;
}

const ChatHeader: FC<chatHeaderProps> = (props) => {
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
    const openedChat = useInbox(inboxStateSelectors.openedChat)
    const setopenedChat = useInbox(inboxStateSelectors.setopenedChat)


    const styles = styles_(theme)

    const MainMenuList: any[] = [
        {
            id: 1,
            name: lang["_46"]
        },
        {
            id: 2,
            name: lang["_47"],
            onPress: () => setshowSearch(true)

        },
        {
            id: 3,
            name: lang["_48"],
            onPress: () => setmuteModalVisible(true)
        },
        {
            id: 4,
            name: lang["_49"]
        },
        {
            id: 5,
            name: lang["_50"],
            onPress: () => setblockModalVisible(true)
        },
    ]


    const handleBackPress = () => {
        if (showSearch) {
            setshowSearch(false)
        } else {
            navigation.goBack()
            setopenedChat(null)
        }
    }

    const handleSearch = (val: string) => {
        if (val != '') {

        } else {

        }
        setsearchVal(val)
    }

    return (
        <View style={styles.main}>
            <View style={styles.userContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    onPress={() => handleBackPress()}
                >
                    <BackIcon
                        fill={COLORS.WHITE}
                        width={hp(2.4)}
                        height={hp(2)}
                    />
                </TouchableOpacity>

                <If condition={!showSearch}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.userContainer}>
                        <Image
                            source={openedChat.avatar}
                            style={styles.avatar}
                        />

                        <View style={styles.txtContainer}>
                            <Label
                                numberOfLines={1}
                                style={styles.title}
                            >{openedChat.name}</Label>
                            <BodyText style={styles.status}>Online</BodyText>
                        </View>
                    </TouchableOpacity>
                </If>

            </View>

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

                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                            style={styles.btnContainer1}
                        >
                            <VideoIcon
                                width={hp(2.5)}
                                height={hp(2.5)} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                            style={styles.btnContainer}
                            onPress={() => setmuteModalVisible(true)}
                        >
                            <CallIcon
                                fill={COLORS.WHITE}
                                width={hp(2.25)}
                                height={hp(2.25)} />
                        </TouchableOpacity>

                        {/* VERTICAL DOTS MENU */}
                        <Menu ref={menuRef}>
                            <MenuTrigger>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                    onPress={() => menuRef?.current?.open()}
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
    )
}

export default ChatHeader

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
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: hp(4.8),
        height: hp(4.8),
        marginLeft: hp(2),
        borderRadius: hp(4.8),
    },
    txtContainer: {
        justifyContent: 'center',
        marginLeft: hp(2),
        alignItems: 'flex-start',
        width: wp(35),
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
    status: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._14
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
        paddingRight: hp(3),
        paddingVertical: hp(0.9),
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