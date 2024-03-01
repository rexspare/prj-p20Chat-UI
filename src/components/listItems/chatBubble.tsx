import Slider from '@react-native-community/slider';
import React, { FC, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
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

    const styles = styles_(theme, item)

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

    const format = (seconds: any) => {
        let mins = parseInt(seconds / 60)
            .toString()
            .padStart(2, '0')
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

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

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onLongPress={() => menuRef?.current?.open()}
            style={styles.main}>

            <View >

                {/* REPLIED TO BUBBLE */}
                <If condition={item?.replyingTo != undefined || item?.replyingTo != null}>
                    <View style={styles.bubbleReply}>

                        {/* TEXT */}
                        <If condition={repliedToMsg.type == MESSAGE_TYPES.TEXT}>
                            <BodyText style={styles.txt2}>{repliedToMsg.message}</BodyText>
                        </If>

                        {/* AUDIO */}
                        <If condition={repliedToMsg.type == MESSAGE_TYPES.AUDIO}>
                            <View style={styles.controls}>
                                <TouchableCustom
                                    onPress={() => togglePlayback()}
                                >
                                    <Feather
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
                            </View>
                            {repliedToMsg?.message && <BodyText style={styles.txt2}>{repliedToMsg.message}</BodyText>}

                        </If>

                        {/* IMAGE */}
                        <If condition={repliedToMsg.type == MESSAGE_TYPES.IMAGE}>
                            <Image
                                source={repliedToMsg.media}
                                style={styles.img}
                            />
                            {repliedToMsg?.message && <BodyText style={styles.txt2}>{repliedToMsg.message}</BodyText>}
                        </If>

                        {/* VIDEO */}
                        <If condition={repliedToMsg.type == MESSAGE_TYPES.VIDEO}>
                            <View style={styles.videoContainer}>
                                <Video
                                    ref={videoRef}
                                    source={{ uri: repliedToMsg.media }}
                                    resizeMode="cover"
                                    paused={true}
                                    style={styles.video}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => repliedToMsg.type == MESSAGE_TYPES.VIDEO && playVideo(item)}
                                    style={styles.videoOverlay}>
                                    <RightCaretIcon
                                        fill={COLORS.WHITE}
                                        width={hp(3)}
                                        height={hp(3)}
                                    />
                                </TouchableOpacity>
                            </View>

                            {repliedToMsg?.message && <BodyText style={styles.txt2}>{repliedToMsg.message}</BodyText>}
                        </If>

                    </View>
                </If>
                {/* REPLIED TO BUBBLE */}



                <View style={styles.bubble}>

                    {/* TEXT */}
                    <If condition={item.type == MESSAGE_TYPES.TEXT}>
                        <BodyText style={styles.txt}>{item.message}</BodyText>
                    </If>

                    {/* AUDIO */}
                    <If condition={item.type == MESSAGE_TYPES.AUDIO}>
                        <View style={styles.controls}>
                            <TouchableCustom
                                onPress={() => togglePlayback()}>
                                <Feather
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
                        </View>
                        {item?.message && <BodyText style={styles.txt}>{item.message}</BodyText>}

                    </If>

                    {/* IMAGE */}
                    <If condition={item.type == MESSAGE_TYPES.IMAGE}>
                        <Image
                            source={item.media}
                            style={styles.img}
                        />
                        {item?.message && <BodyText style={styles.txt}>{item.message}</BodyText>}
                    </If>

                    {/* VIDEO */}
                    <If condition={item.type == MESSAGE_TYPES.VIDEO}>
                        <View style={styles.videoContainer}>
                            <Video
                                ref={videoRef}
                                source={{ uri: item.media }}
                                resizeMode="cover"
                                paused={true}
                                style={styles.video}
                            />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => item.type == MESSAGE_TYPES.VIDEO && playVideo(item)}
                                style={styles.videoOverlay}>
                                <RightCaretIcon
                                    fill={COLORS.WHITE}
                                    width={hp(3)}
                                    height={hp(3)}
                                />
                            </TouchableOpacity>
                        </View>

                        {item?.message && <BodyText style={styles.txt}>{item.message}</BodyText>}
                    </If>

                </View>

                {/* TIME */}
                <If condition={checkDateToShow() == false}>
                    <View style={styles.timeContainer}>
                        <BodyText style={styles.time}>{item.time}</BodyText>
                        <If condition={item.meUser}>
                            <SeenIcon
                                fill={item.seen ? COLORS.READ_MSG : theme.ACCENT}
                                width={hp(1.9)}
                                height={hp(1.8)}
                            />
                        </If>
                    </View>
                </If>
            </View>


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

const styles_ = (theme: ITHEME, item: IMESSAGE) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: item.meUser == true ? 'flex-end' : 'flex-start',
        marginTop: hp(1)
    },
    container: {

    },
    bubble: {
        minHeight: hp(5.3),
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: item.meUser == true ? theme.MY_CHAT_BUBBLE : theme.CHAT_BUBLE,
        borderRadius: hp(3),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(1.2),
        maxWidth: isTablet() ? 400 : wp(60)
    },
    bubbleReply: {
        minHeight: hp(5.3),
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: item.meUser == false ? theme.MY_CHAT_BUBBLE : theme.CHAT_BUBLE,
        borderRadius: hp(3),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(1.2),
        maxWidth: isTablet() ? 400 : wp(60),
        ...(item.meUser == true ? { right: hp(2.5), } : { left: hp(2.5), }),
        bottom: -hp(1.2),
    },
    txt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        lineHeight: FONT_SIZE._20,
        color: theme.BLACK_TO_WHITE,
        textAlign: item.meUser == true ? 'right' : 'left',
        width: '100%'
    },
    txt2: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._12,
        lineHeight: FONT_SIZE._18,
        color: theme.PRIMARY,
        textAlign: item.meUser == true ? 'right' : 'left',
        width: '100%'
    },
    time: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._12,
        color: theme.ACCENT,
        textAlign: item.meUser == true ? 'right' : 'left',
        marginTop: hp(1.2),
        margin: hp(0.5)
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: item.meUser == true ? 'flex-end' : 'flex-start',
        alignItems: 'flex-end'
    },
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
    img: {
        width: wp(50),
        height: hp(30),
        borderRadius: hp(1),
        ...(item?.message && { marginVertical: hp(1) })
    },
    videoContainer: {
        width: isTablet() ? 300 : wp(50),
        height: isTablet() ? 300 : wp(45),
        borderRadius: hp(1),
        ...(item?.message && { marginVertical: hp(1) })
    },
    video: {
        width: '100%',
        height: '100%',
        borderRadius: hp(1)
    },
    videoOverlay: {
        width: '100%',
        height: '100%',
        borderRadius: hp(1),
        backgroundColor: COLORS.BLACK_OP,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        width: isDeviceTablet() ? 250 : wp(40),
        alignSelf: 'center',
    },
    controls: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    }
})