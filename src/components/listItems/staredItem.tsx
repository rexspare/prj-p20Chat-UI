import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { FONTS, FONT_SIZE, hp } from '../../assets/stylesGuide';
import { FRIENDS_AVATARS } from '../../assets/images';
import { isDeviceTablet } from '../../utils/myUtils';
import { BodyText, ChatBubble, Label } from '..';
import { ITHEME } from '../../models/config';
import useAppConfig from '../../hooks/AppConfig';
import { RightCaretIcon } from '../../assets/icons';
import StaredBubble from './staredBubble';

interface staredItemProps {
    item: any;
    playVideo: Function;
}

const StaredItem: FC<staredItemProps> = (props) => {
    const { item, playVideo = () => { } } = props
    const { theme } = useAppConfig()

    const styles = styles_(theme)

    const sentByme = item.sender == 'me'

    return (
        <View style={styles.main}>

            <View style={styles.row}>
                <Image
                    source={sentByme ? FRIENDS_AVATARS.P4 : item?.sender?.avatar}
                    style={styles.avatar}
                />

                {/* CONTEXT */}
                <View style={styles.context}>
                    <View style={styles.row1}>
                        <Label style={styles.name}>{sentByme ? "You" : item?.sender.name}</Label>
                        <RightCaretIcon
                            fill={theme.ACCENT}
                            width={hp(0.9)}
                            height={hp(0.9)}
                            style={{ marginHorizontal: 5 }}
                        />
                        <Label style={styles.name}>{sentByme ? item?.reciever.name : "You"}</Label>
                    </View>

                    <StaredBubble
                        item={{
                            ...item,
                            meUser: sentByme
                        }}
                        playVideo={() => playVideo(item)}

                    />


                </View>

                {/* TIME */}
                <BodyText style={styles.timeTxt}>{item.time}</BodyText>

            </View>


        </View>
    )
}

export default StaredItem

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        marginTop: hp(2),
        paddingHorizontal: isDeviceTablet() ? '2%' : "4%"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    avatar: {
        width: hp(4.29),
        height: hp(4.29),
        borderRadius: hp(4.29),

    },
    context: {
        flex: 1,
        paddingLeft: hp(1.5)
    },
    timeTxt: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._12,
        color: theme.ACCENT,
        marginLeft: hp(2),
        marginTop: hp(1)

    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE
    }
})