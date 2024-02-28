import React, { FC, useCallback, useMemo } from 'react';
import {
    PanResponder,
    StyleSheet,
    View
} from 'react-native';
import { COLORS, SIZE, hp, wp } from '../assets/stylesGuide';


const VideoProgress: FC = (props: any) => {

    const { position, duration, onSeek } = props

    const leftPosition = useCallback(
        (dx: any, dy: any) => {
            const newPosition = position + (dx * duration) / SIZE.WIDTH;
            if (newPosition < 0) {
                return 0;
            } else if (newPosition > duration) {
                return duration;
            }
            return newPosition;
        },
        [position],
    );

    const handle = useMemo(() => {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: (e, { dx, dy }) => {
                onSeek?.(leftPosition(dx, dy));
            },
            onPanResponderRelease: (e, { dx, dy }) => {
                onSeek?.(leftPosition(dx, dy));
            },
        });
    }, [position]);

    return (
        <View style={{ marginHorizontal: wp(24), alignSelf: 'stretch' }}>
            <View style={style.track}>
                <View
                    style={[style.progress, { width: `${(position * 100) / duration}%` }]}
                />
                <View
                    {...handle.panHandlers}
                    hitSlop={{
                        bottom: 15,
                        left: 15,
                        right: 15,
                        top: 15,
                    }}
                    style={[style.head, { left: `${(position * 100) / duration}%` }]}
                />
            </View>

        </View>
    )
}

export default React.memo(VideoProgress)


const style = StyleSheet.create({
    track: {
        height: hp(4),
        borderRadius: 4,
        backgroundColor: COLORS.WHITE,
    },
    progress: {
        borderRadius: 4,
        height: hp(4),
        backgroundColor: COLORS.WHITE,
    },
    head: {
        position: 'absolute',
        width: wp(20),
        height: wp(20),
        top: -hp(8),
        marginLeft: -wp(4),
        aspectRatio: 1,
        borderRadius: 12,
        backgroundColor: COLORS.BLACK_OP,
    },
});