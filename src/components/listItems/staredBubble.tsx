import React, { FC, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import {
    Menu
} from 'react-native-popup-menu';
import { BodyText, If, TouchableCustom } from '..';
import { MESSAGE_TYPES } from '../../assets/constants';
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { RightCaretIcon, StarIcon } from '../../assets/icons';
import { isDeviceTablet } from '../../utils/myUtils';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
    Event,
    useActiveTrack,
    Capability
} from 'react-native-track-player';
import Feather from 'react-native-vector-icons/Feather';
import { FRIENDS_AVATARS } from '../../assets/images';
interface IMESSAGE {
    id: number
    meUser: boolean
    staredTime: any;
    type: string;
    message: string | null;
    media: string | null;
}

interface staredBubbleProps {
    item: IMESSAGE;
    playVideo: Function;
}

const StaredBubble: FC<staredBubbleProps> = (props) => {
    const {
        item,
        playVideo = () => { }
    } = props

    const { theme, lang } = useAppConfig()
    const progress = useProgress();
    const playbackState = usePlaybackState();
    const menuRef = useRef<Menu>(null)
    const videoRef = useRef<Video>(null)

    const styles = styles_(theme, item)

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
            style={styles.main}>

            <View >


                <View style={styles.bubble}>

                    {/* TEXT */}
                    <If condition={item.type == MESSAGE_TYPES.TEXT}>
                        <BodyText style={styles.txt}>{item.message}</BodyText>
                    </If>

                    {/* AUDIO */}
                    <If condition={item.type == MESSAGE_TYPES.AUDIO}>
                        <View style={styles.controls}>
                            <TouchableCustom
                                onPress={() => togglePlayback()} >
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
                            source={item.media[0]}
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
                <View style={styles.timeContainer}>
                    <BodyText style={styles.time}>{item.staredTime}</BodyText>
                    <StarIcon
                        fill={theme.ACCENT}
                        width={hp(1.28)}
                        height={hp(1.28)}
                    />
                </View>
            </View>



        </TouchableOpacity>
    )
}

export default StaredBubble

const styles_ = (theme: ITHEME, item: IMESSAGE) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        borderRadius: hp(1.82),
        paddingHorizontal: hp(2.2),
        paddingVertical: hp(1.2),
        maxWidth: isTablet() ? 400 : wp(60)
    },
    txt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        lineHeight: FONT_SIZE._20,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        width: '100%'
    },
    time: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._12,
        color: theme.ACCENT,
        textAlign: item.meUser == true ? 'right' : 'left',
        margin: hp(0.5)
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: hp(1.2),
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
        ...(item?.message && { marginBottom: hp(1.5) })
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