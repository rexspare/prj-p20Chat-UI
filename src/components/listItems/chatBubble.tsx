import React, { FC, useRef } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import TrackPlayer, {
    Capability,
    State,
    usePlaybackState,
    useProgress
} from 'react-native-track-player';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import { BodyText, If, TouchableCustom } from '..';
import { MESSAGE_TYPES } from '../../assets/constants';
import { DeleteMsgIcon, ForwardMsgIcon, ReplyMsgIcon, RightCaretIcon, SeenIcon, StarMsgIcon } from '../../assets/icons';
import { FRIENDS_AVATARS } from '../../assets/images';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import { inbox } from '../../data';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { isDeviceTablet, nextIndexExists } from '../../utils/myUtils';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Slider from 'react-native-slider'

interface IMESSAGE {
    id: number
    meUser: boolean
    time: any;
    type: string;
    message: string | null;
    seen: boolean,
    media: string | null;
    replyingTo: string | number | null;
}

interface chatBubbleProps {
    item: IMESSAGE;
    index: number;
    playVideo?: Function;
}

const ChatBubble: FC<chatBubbleProps> = (props) => {
    const { item, index, playVideo = () => { } } = props
    const { theme, lang } = useAppConfig()
    const progress = useProgress();
    const playbackState = usePlaybackState();
    const menuRef = useRef<Menu>(null)
    const videoRef = useRef<Video>(null)


    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)
    const openedChat = useInbox(inboxStateSelectors.openedChat)

    const styles = styles_(theme, item, item?.meUser == true)

    const OtherChatOptions: any[] = [
        {
            id: 2,
            icon: <StarMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3)}
                height={hp(3)}
            />,
        },
        {
            id: 3,
            icon: <ReplyMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3.2)}
                height={hp(2.68)}
            />,
            onPress: () => handleReply()
        },
        {
            id: 4,
            icon: <ForwardMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3.2)}
                height={hp(2.68)}
            />,
        },
    ]

    const ChatOptions: any[] = [
        {
            id: 1,
            icon: <DeleteMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(2.46)}
                height={hp(3)}
            />,

        },
        {
            id: 2,
            icon: <StarMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3)}
                height={hp(3)}
            />,
        },
        {
            id: 3,
            icon: <ReplyMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3.2)}
                height={hp(2.68)}
            />,
            onPress: () => handleReply()
        },
        {
            id: 4,
            icon: <ForwardMsgIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(3.2)}
                height={hp(2.68)}
            />,
        },
    ]

    const chatArray = inbox

    const checkDateToShow = () => {
        const nextExists = nextIndexExists(chatArray, index)
        if (nextExists) {
            const nextItem = chatArray[index + 1] as IMESSAGE
            return item.meUser == nextItem.meUser && item.time == nextItem.time
        } else {
            return false
        }
    }

    const handleReply = () => {
        setnewMessage({
            ...newMessage,
            replyingTo: item.id
        })
    }
    const repliedToMsg = (item?.replyingTo != undefined || item?.replyingTo != null) &&
        openedChat?.messages?.find((x: any) => x?.id == item?.replyingTo)

    const togglePlayback = async () => {
        try {

            if (progress?.duration == 0 || progress?.position == 0) {
                await TrackPlayer.reset()
                await TrackPlayer.updateOptions({
                    capabilities: [
                        Capability.Play,
                        Capability.Stop,
                        Capability.Pause,
                        Capability.SeekTo,
                        Capability.Skip,
                    ],
                    compactCapabilities: [
                        Capability.Play,
                        Capability.Stop,
                        Capability.Pause,
                        Capability.SeekTo,
                        Capability.Skip,
                    ],
                    notificationCapabilities: [
                        Capability.Play,
                        Capability.Stop,
                        Capability.Pause,
                        Capability.SeekTo,
                        Capability.Skip,
                    ],
                });

                await TrackPlayer.add({
                    id: 'trackId',
                    url: require('../../assets/sound.mp3'),
                    title: 'Track Title',
                    artist: 'Track Artist',
                    artwork: FRIENDS_AVATARS.P1
                });
                await TrackPlayer.play();
            } else {
                if (playbackState.state == State.Playing) {
                    await TrackPlayer.pause();
                } else {
                    await TrackPlayer.play();
                }
            }
        } catch (error) {
            console.log(error);

        }

    };


    // RENDER  BUBLE
    const renderBubble = () => {
        switch (item.type) {
            case MESSAGE_TYPES.TEXT:
                return (
                    <View style={styles.textBubble}>
                        <BodyText style={styles.msgTxt}>{item.message}</BodyText>

                        <View style={styles.timeSeenContainer}>
                            <View style={styles.timeSeen}>
                                <BodyText style={styles.timeTxt}>{item.time}</BodyText>
                                <If condition={item.meUser}>
                                    <SeenIcon
                                        fill={item.seen ? COLORS.READ_MSG : theme.ACCENT}
                                        width={hp(1.4)}
                                        height={hp(1.4)}
                                    />
                                </If>
                            </View>

                        </View>
                    </View>
                )
            case MESSAGE_TYPES.IMAGE:
                return (
                    <View style={styles.imgBubble}>
                        <ImageBackground
                            source={item.media}
                            style={styles.img}
                            imageStyle={{ borderRadius: hp(3), }}
                        >
                            <View style={styles.timeSeen1}>
                                <BodyText style={styles.timeTxt1}>{item.time}</BodyText>
                                <If condition={item.meUser}>
                                    <SeenIcon
                                        fill={item.seen ? COLORS.READ_MSG : theme.ACCENT}
                                        width={hp(1.4)}
                                        height={hp(1.4)}
                                    />
                                </If>
                            </View>
                        </ImageBackground>
                    </View>
                )

            case MESSAGE_TYPES.AUDIO:
                return (
                    <View style={styles.textBubble}>
                        <View style={styles.controls}>
                            <TouchableCustom
                                onPress={() => togglePlayback()}>
                                <AntDesign
                                    name={playbackState.state == State.Playing ? "pause" : "play"}
                                    color={theme.BLACK_TO_WHITE}
                                    size={hp(3)}
                                />
                            </TouchableCustom>
                            
                            <Slider
                                style={styles.slider}
                                value={progress.position}
                                minimumValue={0}
                                maximumValue={progress?.duration}
                                minimumTrackTintColor={theme.BLACK_TO_WHITE}
                                maximumTrackTintColor={theme.BLACK_TO_WHITE}
                                thumbTintColor={theme.BLACK_TO_WHITE}
                                onSlidingComplete={async value => {
                                    const seconds = Math.floor(value);
                                }}
                            />
                            <BodyText style={styles.audioDuration}>0.45</BodyText>

                        </View>
                        <View style={styles.timeSeenContainer}>
                            <View style={styles.timeSeen}>
                                <BodyText style={styles.timeTxt}>{item.time}</BodyText>
                                <If condition={item.meUser}>
                                    <SeenIcon
                                        fill={item.seen ? COLORS.READ_MSG : theme.ACCENT}
                                        width={hp(1.4)}
                                        height={hp(1.4)}
                                    />
                                </If>
                            </View>
                        </View>
                    </View>
                )

            default:
                return <></>
        }
    }



    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onLongPress={() => menuRef?.current?.open()}
            style={styles.main}>

            {renderBubble()}

            {/* MENU */}
            <Menu ref={menuRef}>
                <MenuTrigger>

                </MenuTrigger>
                <MenuOptions
                    optionsContainerStyle={styles.optionsContainerStyle}
                >
                    <View style={styles.menuContainer}>
                        {
                            (item?.meUser ? ChatOptions : OtherChatOptions).map((item, index) => (
                                <MenuOption
                                    key={index}
                                    onSelect={() => item?.onPress && item?.onPress()}
                                >
                                    <View >
                                        {item.icon}
                                    </View>
                                </MenuOption>
                            ))
                        }
                    </View>
                </MenuOptions>
            </Menu>
        </TouchableOpacity>
    )
}

export default ChatBubble

const styles_ = (theme: ITHEME, item: IMESSAGE, meUser: boolean) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: item.meUser == true ? 'flex-end' : 'flex-start',
        marginTop: hp(1)
    },
    // MENU
    optionsContainerStyle: {
        borderRadius: hp(1.2),
        width: hp(30),
    },
    menuContainer: {
        height: hp(6.43),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: hp(1),
        backgroundColor: theme.BACKGROUND
    },
    // TEXT BUBLE 
    textBubble: {
        minHeight: hp(5.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: item?.meUser == true ? theme.NEW_MY_CHAT_BUBBLE : theme.NEW_CHAT_BUBBLE,
        borderRadius: hp(3),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(1.2),
        maxWidth: isTablet() ? 600 : wp(85),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    timeSeenContainer: {
        height: '100%',
        flexDirection: 'column-reverse'
    },
    timeSeen: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    msgTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        color: meUser ? COLORS.BLACK : theme.BLACK_TO_WHITE,
        flexShrink: 1,
        textAlign: 'left'
    },
    timeTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._8,
        color: meUser ? COLORS.ACCENT : theme.ACCENT,
        marginRight: 3,
        marginLeft: 6
    },
    // IMAGE BUBBLE
    imgBubble: {
        backgroundColor: item?.meUser == true ? theme.NEW_MY_CHAT_BUBBLE : theme.NEW_CHAT_BUBBLE,
        borderRadius: hp(3),
        width: isTablet() ? 400 : wp(60),
        height: (isTablet() ? 400 : wp(60)) * 0.75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
    },
    img: {
        borderRadius: hp(3),
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    timeSeen1: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: hp(2),
        marginBottom: hp(1)
    },
    timeTxt1: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._8,
        color: COLORS.WHITE,
        marginRight: 3,
        marginLeft: 6
    },
    // AUDIO BUBBLE
    slider: {
        width: isDeviceTablet() ? 200 : wp(35),
        alignSelf: 'center',
        marginHorizontal: 10,
        height: hp(4)
    },
    controls: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    audioDuration: {
        color: COLORS.PRIMARY,
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._10,
    }

})