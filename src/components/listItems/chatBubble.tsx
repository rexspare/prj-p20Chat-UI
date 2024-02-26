import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { FC, useRef } from 'react'
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { COLORS, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import { BodyText, If } from '..';
import { MESSAGE_TYPES } from '../../assets/constants';
import { isTablet } from 'react-native-device-info';
import { nextIndexExists } from '../../utils/myUtils';
import { inbox } from '../../data';
import { DeleteMsgIcon, ForwardMsgIcon, ReplyMsgIcon, SeenIcon, StarIcon, StarMsgIcon } from '../../assets/icons';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';

interface IMESSAGE {
    id: number
    meUser: boolean
    time: any;
    type: string;
    message: string;
    seen: boolean,
    media: string;
}

interface chatBubbleProps {
    item: IMESSAGE;
    index: number
}

const ChatBubble: FC<chatBubbleProps> = (props) => {
    const { item, index } = props
    const { theme, lang } = useAppConfig()
    const menuRef = useRef<Menu>(null)

    const styles = styles_(theme, item)

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

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onLongPress={() => menuRef?.current?.open()}
            style={styles.main}>
            <View style={styles.container}>
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
                        <BodyText style={styles.txt}>{item.message}</BodyText>
                    </If>

                    {/* VIDEO */}
                    <If condition={item.type == MESSAGE_TYPES.VIDEO}>
                        <BodyText style={styles.txt}>{item.message}</BodyText>
                    </If>

                </View>
                {/* TIME */}
                <If condition={checkDateToShow() == false}>
                    <View style={styles.timeContainer}>
                        <BodyText style={styles.time}>{item.time}</BodyText>
                        <If condition={item.meUser}>
                            <SeenIcon
                                fill={item.seen ? COLORS.READ_MSG : COLORS.UNREAD_MSG}
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
                            (ChatOptions).map((item, index) => (
                                <MenuOption
                                    key={index}
                                    onSelect={() => item?.onPress && item?.onPress()}
                                >
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => item?.onPress && item.onPress()}
                                    >
                                        {item.icon}
                                    </TouchableOpacity>
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
    txt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        lineHeight: FONT_SIZE._20,
        color: theme.BLACK_TO_WHITE,
        textAlign: item.meUser == true ? 'right' : 'left'
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
    }
})