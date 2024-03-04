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
import { DeleteMsgIcon, ForwardMsgIcon, ReplyMsgIcon, RightCaretIcon, SeenIcon, StarIcon, StarMsgIcon, StartFilledIcon } from '../../assets/icons';
import { FRIENDS_AVATARS, IMAGES } from '../../assets/images';
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
    media: any;
    replyingTo: string | number | null;
    amount: number | string;
    crypto: string;
    stared?: boolean;
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
    const meUser = item?.meUser == true

    const styles = styles_(theme, item, meUser)

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


    const renderTimeSeenType1 = () => (
        <View style={styles.timeSeenContainer}>
            <View style={styles.timeSeen}>
                <If condition={item.stared}>
                    <StartFilledIcon
                        width={hp(1)}
                        height={hp(1)}
                        style={{ marginRight: 4 }}
                    />
                </If>
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
    )


    const renderTimeSeenType2 = () => (
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
    )

    // RENDER BUBLE
    const renderBubble = () => {
        switch (item.type) {
            case MESSAGE_TYPES.TEXT:
                return (
                    <View style={styles.textBubble}>
                        <BodyText style={styles.msgTxt}>{item.message}</BodyText>

                        {renderTimeSeenType1()}

                    </View>
                )
            case MESSAGE_TYPES.IMAGE:
                return (
                    <View style={item?.message ? styles.longImgBubble : styles.imgBubble}>
                        {
                            // MULTIIMAGE
                            item.media?.length > 1 ?
                                <View style={styles.multiImgContainer} >
                                    {
                                        item.media.map((img: any, index: number) => (
                                            <ImageBackground
                                                key={index}
                                                source={img}
                                                style={styles.multiImg}
                                            >
                                                <If condition={index == 3}>
                                                    <BodyText style={styles.imgNumTxt}>+45</BodyText>
                                                </If>
                                            </ImageBackground>
                                        ))
                                    }

                                </View>
                                :
                                <ImageBackground
                                    source={item.media[0]}
                                    style={item.message ? styles.longImg : styles.img}
                                    imageStyle={item.message ? styles.longImgStyle : { borderRadius: hp(3) - 2, }}
                                >
                                    {item.message ? null : renderTimeSeenType2()}
                                </ImageBackground>
                        }
                        <If condition={item.message}>
                            <View style={styles.imgTxtContainer}>
                                <BodyText style={styles.msgTxt}>{item.message}</BodyText>
                                {renderTimeSeenType1()}
                            </View>
                        </If>
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
                        {renderTimeSeenType1()}
                    </View>
                )

            case MESSAGE_TYPES.CRYPTO:
                return (
                    <View style={styles.cryptoBubble}>
                        <BodyText style={styles.sentRecievedTxt}>{lang[meUser ? '_225' : '_224']}</BodyText>
                        <BodyText style={styles.cryptoAmount}>{item.amount} <BodyText style={styles.cryptoType}>{item.crypto}</BodyText></BodyText>

                        <View style={styles.timeSeen2}>
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
                )

            case MESSAGE_TYPES.VIDEO:
                return (
                    <View style={styles.imgBubble}>
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

                    </View>
                )
            default:
                return <></>
        }
    }

    // RENDER REPLY  BUBLE
    const renderReplyBubble = () => {
        switch (repliedToMsg.type) {
            case MESSAGE_TYPES.TEXT:
                return (
                    <View style={styles.textRepliedBubble}>
                        <BodyText style={styles.repliedToUser}>{`${lang['_226']} ${openedChat.name}`}</BodyText>
                        <BodyText style={styles.repliedtxt}>{`${repliedToMsg.message}`}</BodyText>
                    </View>
                )
            case MESSAGE_TYPES.IMAGE:
                return (
                    <View style={styles.textRepliedBubble}>
                        <BodyText style={styles.repliedToUser}>{`${lang['_226']} ${openedChat.name}`}</BodyText>
                        <ImageBackground
                            source={IMAGES.AVATAR}
                            style={styles.repliedImg}
                            imageStyle={{ borderRadius: hp(3) - 2, }}
                        >
                            {item.message ? null : renderTimeSeenType2()}
                        </ImageBackground>
                    </View>
                )

            case MESSAGE_TYPES.AUDIO:
                return (
                    <View style={styles.textRepliedBubble}>
                        <BodyText style={styles.repliedToUser}>{`${lang['_226']} ${openedChat.name}`}</BodyText>

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
                    </View>
                )

            case MESSAGE_TYPES.CRYPTO:
                return (
                    <View style={styles.textRepliedBubble}>
                        <BodyText style={styles.repliedToUser}>{`${lang['_226']} ${openedChat.name}`}</BodyText>
                        <BodyText style={styles.repliedtxt}>{`${repliedToMsg.message}`}</BodyText>
                    </View>
                )
            case MESSAGE_TYPES.VIDEO:
                return (
                    <View style={styles.videoRepliedBubble}>
                        <BodyText style={styles.repliedToUser}>{`${lang['_226']} ${openedChat.name}`}</BodyText>
                        <View style={[styles.videoContainer, {
                            width: wp(35),
                            height: wp(35)
                        }]}>
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
                    </View>
                )

            default:
                return <></>
        }
    }


    return (
        <>
            <If condition={item?.replyingTo != undefined || item?.replyingTo != null}>
                <View style={styles.main}>
                    <View>
                        {renderReplyBubble()}
                    </View>
                </View>
            </If>

            <TouchableOpacity
                activeOpacity={0.8}
                onLongPress={() => menuRef?.current?.open()}
                style={styles.main}>
                <View>

                    {renderBubble()}
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
        </>
    )
}

const arr = [{
    id: 1
}]

export default React.memo(ChatBubble)

const styles_ = (theme: ITHEME, item: IMESSAGE, meUser: boolean) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: item.meUser == true ? 'flex-end' : 'flex-start',
        marginTop: hp(1.2)
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
        flexDirection: 'column-reverse',
        marginLeft: 5,
    },
    timeSeen: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    longImgBubble: {
        backgroundColor: item?.meUser == true ? theme.NEW_MY_CHAT_BUBBLE : theme.NEW_CHAT_BUBBLE,
        borderRadius: hp(3),
        width: isTablet() ? 400 : wp(60),
        minHeight: isTablet() ? 400 : wp(60),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        padding: 3
    },
    img: {
        borderRadius: hp(3),
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    repliedImg: {
        borderRadius: hp(3),
        width: isTablet() ? 300 : wp(50),
        minHeight: isTablet() ? 300 : wp(50),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    multiImg: {
        width: ((isTablet() ? 400 : wp(60)) - 6) / 2,
        height: (((isTablet() ? 400 : wp(60)) * 0.75) - 6) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    longImg: {
        borderRadius: hp(3),
        width: '100%',
        minHeight: isTablet() ? 400 : wp(60),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    longImgStyle: {
        borderTopLeftRadius: hp(3) - 2,
        borderTopRightRadius: hp(3) - 2,
        borderBottomLeftRadius: hp(1),
        borderBottomRightRadius: hp(1),
    },
    multiImgContainer: {
        borderRadius: hp(3) - 2,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        overflow: 'hidden'
    },
    imgTxtContainer: {
        minHeight: hp(5.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: item?.meUser == true ? theme.NEW_MY_CHAT_BUBBLE : theme.NEW_CHAT_BUBBLE,
        borderRadius: hp(3),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(1.2),
        maxWidth: isTablet() ? 400 : wp(60),
    },
    imgNumTxt: {
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._14,
    },
    timeSeen1: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: hp(2),
        marginBottom: hp(1)
    },
    timeSeen2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: hp(0.4)
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
    },
    // CRYPTO,
    cryptoBubble: {
        height: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: item?.meUser == true ? theme.NEW_MY_CHAT_BUBBLE : theme.NEW_CHAT_BUBBLE,
        borderRadius: hp(1.4),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(0.8),
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
    sentRecievedTxt: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.SECONDARY,
        fontSize: FONT_SIZE._6
    },
    repliedToUser: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.SECONDARY,
        fontSize: FONT_SIZE._8,
        textAlign: 'left'
    },
    cryptoAmount: {
        fontFamily: FONTS.EXTRA_BOLD,
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE._14,
        marginVertical: hp(0.3)
    },
    cryptoType: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE._14,
    },
    // TEXT REPLIED BUBLE 
    textRepliedBubble: {
        marginBottom: -hp(0.5),
        minHeight: hp(5.3),
        width: 'auto',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: hp(3),
        paddingHorizontal: hp(2.5),
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
    repliedtxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._12,
        color: meUser ? COLORS.BLACK : theme.BLACK_TO_WHITE,
        flexShrink: 1,
        textAlign: 'left',
        marginTop: hp(0.5)
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        borderRadius: hp(3),
        ...(item?.message && { marginVertical: hp(1) })
    },
    video: {
        width: '100%',
        height: '100%',
        borderRadius: hp(3)
    },
    videoOverlay: {
        width: '100%',
        height: '100%',
        borderRadius: hp(3) - 3,
        backgroundColor: COLORS.BLACK_OP,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoRepliedBubble: {
        marginBottom: -hp(0.5),
        minHeight: hp(5.3),
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: hp(3),
        paddingHorizontal: hp(1),
        paddingTop: hp(1.2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
})