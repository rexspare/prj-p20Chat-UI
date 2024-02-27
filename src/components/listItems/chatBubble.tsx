import React, { FC, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, If } from '..';
import { MESSAGE_TYPES } from '../../assets/constants';
import { DeleteMsgIcon, ForwardMsgIcon, ReplyMsgIcon, SeenIcon, StarMsgIcon } from '../../assets/icons';
import { COLORS, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import { inbox } from '../../data';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { nextIndexExists } from '../../utils/myUtils';

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
    index: number
}

const ChatBubble: FC<chatBubbleProps> = (props) => {
    const { item, index } = props
    const { theme, lang } = useAppConfig()
    const menuRef = useRef<Menu>(null)

    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)

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
                        <If condition={item.type == MESSAGE_TYPES.TEXT}>
                            <BodyText style={styles.txt2}>{item.message}</BodyText>
                        </If>

                        {/* AUDIO */}
                        <If condition={item.type == MESSAGE_TYPES.AUDIO}>
                            <BodyText style={styles.txt2}>{item.message}</BodyText>
                        </If>

                        {/* IMAGE */}
                        <If condition={item.type == MESSAGE_TYPES.IMAGE}>
                            <Image
                                source={item.media}
                                style={styles.img}
                            />
                            <BodyText style={styles.txt2}>{item.message}</BodyText>
                        </If>

                        {/* VIDEO */}
                        <If condition={item.type == MESSAGE_TYPES.VIDEO}>
                            <BodyText style={styles.txt2}>{item.message}</BodyText>
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
        ...(item?.message && { marginBottom: hp(1.5) })
    }
})