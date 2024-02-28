import React, { FC, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import {
    Menu
} from 'react-native-popup-menu';
import { BodyText, If } from '..';
import { MESSAGE_TYPES } from '../../assets/constants';
import { FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { StarIcon } from '../../assets/icons';

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
}

const StaredBubble: FC<staredBubbleProps> = (props) => {
    const { item } = props
    const { theme, lang } = useAppConfig()
    const menuRef = useRef<Menu>(null)

    const styles = styles_(theme, item)

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
                        <BodyText style={styles.txt}>{item.message}</BodyText>
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
                        <BodyText style={styles.txt}>{item.message}</BodyText>
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
    }
})