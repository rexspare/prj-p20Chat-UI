import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Image, ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native'
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu'
import Entypo from 'react-native-vector-icons/Entypo'
import SIcon from 'react-native-vector-icons/SimpleLineIcons'
import { CallIcon, NotificationIcon, SearchIcon, StarIcon, VerticalDotsIcon, VideoCallIcon } from '../../assets/icons'
import { COLORS, hp } from '../../assets/stylesGuide'
import { AppHeader, BodyText, CustomSwitch, If, Label, Layout, Spacer } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { BlockUserModal } from '../../components/popups'
import { SCREENS } from '../../assets/constants'

const UserProfileScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()

    const mediaList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    const media = [...mediaList]

    const styles = styles_(theme)
    const menuRef = useRef<Menu>(null)

    const selectedConatct = useInbox(inboxStateSelectors.selectedConatct)
    const [blockModalVisible, setblockModalVisible] = useState(false)
    const [isNotificationEnabled, setisNotificationEnabled] = useState(false)

    const MenuList: any[] = [
        {
            id: 3,
            name: lang["_35"],
            onPress: () => setblockModalVisible(true)
        },
    ]

    const ActionMenu: any[] = [
        {
            id: 1,
            name: lang["_178"],
            icon: <CallIcon
                fill={COLORS.SECONDARY}
                width={hp(2.46)}
                height={hp(2.46)} />
        },
        {
            id: 2,
            name: lang["_179"],
            icon: <VideoCallIcon
                width={hp(2.68)}
                height={hp(2.68)} />
        },
        {
            id: 3,
            name: lang["_180"],
            icon: <SearchIcon
                fill={COLORS.SECONDARY}
                width={hp(2.46)}
                height={hp(2.46)} />
        },
    ]

    const Setting_Menu: any[] = [
        {
            id: 1,
            name: lang["_184"],
            icon: <NotificationIcon
                color={theme.BLACK_TO_WHITE}
                width={hp(2.36)}
                height={hp(2.36)} />,
            rightIcon: <CustomSwitch
                isEnabled={isNotificationEnabled}
                setIsEnabled={setisNotificationEnabled}
                type2={true}
            />
        },
        {
            id: 1,
            name: lang["_185"],
            icon: <StarIcon
                color={theme.BLACK_TO_WHITE}
                width={hp(2.36)}
                height={hp(2.36)} />,
            rightIcon: <Entypo
                name='chevron-thin-right'
                color={theme.BLACK_TO_WHITE}
                size={hp(2)}
                style={{ marginRight: hp(1) }}
            />,
            onPress: () => navigation.navigate(SCREENS.STARED)
        },
    ]

    return (
        <>
            <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
            <Layout fixed={true} containerStyle={styles.main}>

                <AppHeader
                    showRightIcon={true}
                    renderRightIcon={
                        < Menu ref={menuRef}>
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
                                    (MenuList).map((item, index) => (
                                        <MenuOption
                                            key={index}
                                            onSelect={() => item?.onPress && item?.onPress()} >
                                            <BodyText style={styles.menuTxt}>{item.name}</BodyText>
                                        </MenuOption>
                                    ))
                                }
                            </MenuOptions>
                        </Menu>
                    }
                />

                <Layout
                    fixed={true}
                    containerStyle={styles.container}
                >

                    <Label style={styles.txt}>{selectedConatct.name}</Label>

                    <Layout containerStyle={styles.layout} >

                        <View style={styles.row}>
                            {
                                ActionMenu.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.8}
                                        style={styles.iconBtn}
                                    >
                                        {item.icon}

                                        <BodyText style={styles.txt1}>{item.name}</BodyText>

                                    </TouchableOpacity>
                                ))
                            }

                        </View>

                        <Label style={styles.txt2}>{lang['_181']}</Label>

                        <BodyText style={styles.txt5}>{`Available for any design project!\nHit me up for pricing. Chat only, no call.`}</BodyText>


                        {/* PHONE FIELD */}
                        <View style={styles.phoneContainer}>
                            <View style={styles.iconContainer}>
                                <SIcon
                                    name='phone'
                                    color={theme.BLACK_TO_WHITE}
                                    size={hp(2.36)}
                                />
                            </View>

                            <View style={styles.view}>
                                <BodyText style={styles.txt3}>{lang['_134']}</BodyText>
                                <BodyText style={styles.txt4}>+23 123 4567 890</BodyText>
                            </View>

                        </View>

                        <Label style={styles.txt2}>{lang['_183']}</Label>

                        {
                            Setting_Menu.map((item, index) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => item?.onPress && item?.onPress()}
                                    style={styles.itemContianer}>
                                    <View style={styles.iconContainer}>
                                        {item.icon}
                                    </View>
                                    <View style={styles.view}>
                                        <BodyText style={styles.txt3}>{item.name}</BodyText>
                                    </View>
                                    {item.rightIcon}
                                </TouchableOpacity>
                            ))
                        }

                        <Label style={styles.txt2}>{lang['_186']}</Label>

                        <View style={styles.mediaContainer}>
                            {
                                (media.slice(0, 6)).map((item, index) => (
                                    <ImageBackground
                                        key={index}
                                        source={{ uri: 'https://picsum.photos/200' }}
                                        style={styles.media}
                                        imageStyle={styles.mediaImg}
                                    >
                                        <If condition={index == 5}>
                                            <View style={styles.imgShade}>
                                                <BodyText style={styles.txt6}>+{mediaList.length - 6}</BodyText>
                                            </View>
                                        </If>

                                    </ImageBackground>
                                ))
                            }
                        </View>

                        <Spacer height={hp(5)} />

                    </Layout>

                </Layout>
                {/* IMAGE AVATAR */}
                <View style={styles.avatarContainer} >
                    <Image
                        source={selectedConatct.avatar}
                        style={styles.avatar}
                    />
                </View>

                <BlockUserModal
                    isVisible={blockModalVisible}
                    onClose={() => setblockModalVisible(false)}
                />

            </Layout>
        </>
    )
}


export default UserProfileScreen
