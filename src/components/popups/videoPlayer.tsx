import React, { FC, useCallback, useRef, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import { If, TouchableCustom } from '..';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, SIZE, hp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';
import Slider from '@react-native-community/slider';

interface videpPlayerProps {
    isVisible: boolean;
    onClose: Function;
}



const VideoPlayerModal: FC<videpPlayerProps> = (props) => {
    const {
        isVisible,
        onClose = () => { },
    } = props

    const { lang, theme } = useAppConfig()
    const videoRef = useRef<Video>(null);
    const [paused, setPaused] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoUri = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"

    const [progress, setProgress] = useState({
        playableDuration: 0,
        currentTime: 0,
        seekableDuration: 0,
    });

    const onProgress = useCallback((data: any) => {
        setProgress(data);

    }, []);

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setPaused(true);

    };

    const onSeek = useCallback((currentTime: any) => {
        videoRef.current?.seek(currentTime);
    }, []);

    const onError = useCallback((error: any) => {
        setVideoEnded(false);
    }, []);

    const togglePause = () => {
        if (paused) {
            setPaused(false)
        } else {
            setPaused(true)
        }
    }

    const styles = styles_(theme)

    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType='slide'
            style={{ flex: 1 }}
        >
            <View style={styles.main}>
                <If condition={videoUri}>

                    <Video
                        source={{ uri: videoUri }}
                        ref={videoRef}
                        resizeMode="contain"
                        paused={paused}
                        style={[styles.video]}
                        onError={onError}
                        onProgress={onProgress}
                        onEnd={handleVideoEnd}
                    />

                </If>

                {/* HEADER */}
                <View style={styles.row}>
                    <TouchableCustom
                        onPress={() => onClose()}
                    >
                        <Feather
                            name='x'
                            color={COLORS.WHITE}
                            size={hp(3)}
                        />
                    </TouchableCustom>
                </View>

                <View style={styles.controls}>

                    <Slider
                        style={{
                            width: '90%',
                            height: 20,
                            alignSelf: 'center',
                        }}
                        value={progress.currentTime}
                        minimumValue={0}
                        maximumValue={progress.seekableDuration}
                        minimumTrackTintColor={COLORS.WHITE}
                        maximumTrackTintColor={COLORS.WHITE}
                        thumbTintColor={COLORS.WHITE}
                        onSlidingComplete={onSeek}
                    />

                    <TouchableCustom
                        style={styles.btn}
                        onPress={() => togglePause()}
                    >
                        <Feather
                            name={paused ? "play" : "pause"}
                            color={COLORS.WHITE}
                            size={hp(3)}
                        />
                    </TouchableCustom>
                </View>
            </View>

        </Modal>
    )
}

export default VideoPlayerModal


const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    camera: {
        width: '100%',
        height: '100%'
    },
    container: {
        position: 'absolute',
        bottom: 0,
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 70 : hp(2),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    txt: {
        fontWeight: '700',
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
    },

    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        position: 'absolute',
        width: SIZE.WIDTH,
        bottom: (isIOS() && hasNotch()) ? hp(4) : hp(2),
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: isDeviceTablet() ? '2%' : '10%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    btn: {
        marginLeft: hp(2)
    }
})