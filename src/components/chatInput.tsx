import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import useAppConfig from '../hooks/AppConfig'
import { ITHEME } from '../models/config'
import { hp, wp, COMMON_STYLES, COLORS, FONTS, FONT_SIZE } from '../assets/stylesGuide'
import { CallSendIcon, DeletecIcon, LeftChevIcon, LockIcon, MicIcon, SendMsgIcon, StopIcon } from '../assets/icons'
import Feather from 'react-native-vector-icons/Feather'
import { inboxStateSelectors, useInbox } from '../states/inbox'
import { BodyText, If, TouchableCustom } from '.'
import { formatSeconds, generateRandomId, isDeviceTablet } from '../utils/myUtils'

import SwipeButton from 'rn-swipe-button';
import { MESSAGE_TYPES } from '../assets/constants'
import moment from 'moment'
import { IMAGES } from '../assets/images'
interface chatInputProps {
    listRef: any;
    toggleMediaPicker: Function;
}

const ChatInput: FC<chatInputProps> = (props) => {
    const {
        listRef,
        toggleMediaPicker = () => { }
    } = props

    const { theme, lang } = useAppConfig()
    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)

    const openedChat = useInbox(inboxStateSelectors.openedChat)
    const setopenedChat = useInbox(inboxStateSelectors.setopenedChat)

    // AUDIOSTATES
    const [isRecording, setisRecording] = useState(false)
    const [isRecordedComplete, setisRecordedComplete] = useState(false)
    const [timer, setTimer] = useState(0);


    useEffect(() => {
        let intervalId: any;

        if (isRecording) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRecording]);


    const handleChange = (txt: string) => {
        setnewMessage({ ...newMessage, text: txt })
    }

    const styles = styles_(theme, isRecording)

    const handleRecord = () => {
        setisRecording(true)
    }

    const handleReleaseRecord = () => {
        if (isRecording) {
            setisRecording(false)
            setisRecordedComplete(true)
        }
    }

    const checkIfMsgEmpty = () => {
        if (newMessage.text || newMessage.media) {
            return false
        } else {
            return true
        }
    }

    const hanldeSendMsg = () => {
        const newMessageData = {
            id: generateRandomId(20),
            meUser: true,
            time: moment().format('h:mm A'),
            type: newMessage?.type || MESSAGE_TYPES.TEXT,
            seen: false,
            message: newMessage?.text || null,
            media: newMessage?.media || null,
            replyingTo: newMessage?.replyingTo || null
        }

        if (!checkIfMsgEmpty()) {
            setopenedChat({
                ...openedChat,
                messages: [...openedChat.messages, newMessageData]
            })
            setTimeout(() => {
                listRef.current?.scrollToEnd()
            }, 300);
            setnewMessage({})
        }
    }

    const handleLongPress = () => {
        if (checkIfMsgEmpty()) {
            handleRecord()
        } else {
            hanldeSendMsg()
        }

    }

    const handlePress = () => {
        if (!checkIfMsgEmpty()) {
            hanldeSendMsg()
        }
    }

    const cancelReply = () => {
        setnewMessage({
            ...newMessage,
            replyingTo: null
        })
    }

    const repliedToMsg = (newMessage?.replyingTo && openedChat?.messages?.length > 0) &&
        openedChat?.messages?.find((x: any) => x?.id == newMessage?.replyingTo)

    const repliedToMsglabel = () => {
        if (repliedToMsg?.message) {
            return repliedToMsg?.message
        }

        switch (repliedToMsg?.type) {
            case MESSAGE_TYPES.AUDIO:
                return lang['_197']
            case MESSAGE_TYPES.VIDEO:
                return lang['_198']
            case MESSAGE_TYPES.IMAGE:
                return lang['_199']
            case MESSAGE_TYPES.DOCUMENT:
                return lang['_200']
            case MESSAGE_TYPES.TEXT:
                return repliedToMsg?.message
            default:
                return repliedToMsg?.message
        }
    }


    const cancelRecord = () => {
        setisRecordedComplete(false)
        setTimer(0)
        setisRecording(false)
    }



    return (
        <>
            {
                isRecordedComplete == false || timer == 0 ?
                    <View style={styles.main}>
                        <View style={styles.main1}>

                            {/* REPLIED TO MESSAGE */}
                            <If condition={newMessage?.replyingTo != undefined || newMessage?.replyingTo != null}>
                                <View style={styles.row}>
                                    <BodyText style={styles.txt1}>{`${lang['_196']} ${openedChat?.name}`}</BodyText>

                                    <TouchableCustom
                                        onPress={() => cancelReply()}
                                    >
                                        <Feather
                                            name='x'
                                            color={theme.BLACK_TO_WHITE}
                                            size={hp(2.5)}
                                        />
                                    </TouchableCustom>
                                </View>

                                {/* MESSAGE */}
                                <BodyText style={styles.txt2}>{repliedToMsglabel()}</BodyText>

                                <View style={styles.line1}></View>
                            </If>

                            {/* MAIN INPUT */}
                            <View style={styles.container}>
                                {
                                    isRecording ?
                                        // WHEN RECORDING AUDIO
                                        <View style={styles.recordContainer}>

                                            <View style={[styles.recordContainer, { justifyContent: 'flex-start' }]}>
                                                <MicIcon
                                                    fill={COLORS.RED}
                                                    width={hp(2.4)}
                                                    height={hp(2)}
                                                />
                                                <BodyText style={styles.txt}>{formatSeconds(timer)}</BodyText>
                                            </View>

                                            <View style={styles.recordContainer}>
                                                <LeftChevIcon
                                                    fill={theme.ACCENT}
                                                    width={hp(1.2)}
                                                    height={hp(1.2)}
                                                />
                                                <BodyText style={styles.txt}>{lang['_60']}</BodyText>
                                            </View>

                                        </View>
                                        :
                                        // WHEN *NOT* RECORDING AUDIO
                                        <>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={styles.roundBtn}
                                                onPressIn={() => toggleMediaPicker()}
                                            >
                                                <Feather
                                                    name='plus'
                                                    color={theme.WHITE_TO_BLACK}
                                                    size={hp(2.4)}
                                                />
                                            </TouchableOpacity>


                                            <TextInput
                                                placeholder={lang['_53']}
                                                placeholderTextColor={theme.ACCENT}
                                                value={newMessage?.text}
                                                onChangeText={(txt) => handleChange(txt)}
                                                style={styles.input}
                                            />

                                            <View style={styles.line}></View>
                                        </>
                                }

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[styles.roundBtn, {
                                        width: isRecording ? hp(6) : hp(4),
                                        height: isRecording ? hp(6) : hp(4),
                                    }]}
                                    onPress={() => handlePress()}
                                    onLongPress={() => handleLongPress()}
                                    onPressOut={() => handleReleaseRecord()}
                                >
                                    {
                                        checkIfMsgEmpty() ?
                                            <MicIcon
                                                fill={theme.WHITE_TO_BLACK}
                                                width={hp(2.4)}
                                                height={hp(2)}
                                            />
                                            :
                                            <SendMsgIcon
                                                fill={theme.WHITE_TO_BLACK}
                                                width={hp(2.4)}
                                                height={hp(2)}
                                            />
                                    }
                                </TouchableOpacity>


                                {/* RECORDING LOCK */}
                                <If condition={isRecording}>
                                    <View style={styles.slideUpContainer}>
                                        <LockIcon
                                            fill={theme.ACCENT}
                                            width={hp(2.6)}
                                            height={hp(2.6)}
                                        />
                                    </View>
                                </If>
                            </View>
                        </View>
                    </View >
                    :
                    <View style={styles.mainSound}>
                        <View style={styles.row1}>
                            <BodyText style={styles.txt3}>{formatSeconds(timer)}</BodyText>

                            <Image
                                source={IMAGES.TRACK}
                                style={styles.track}
                            />
                        </View>

                        <View style={styles.row2}>

                            <TouchableCustom
                                onPress={() => cancelRecord()}
                                style={styles.btn}>
                                <DeletecIcon
                                    fill={COLORS.ACCENT}
                                    width={hp(2.68)}
                                    height={hp(2.68)}
                                />
                            </TouchableCustom>

                            <TouchableCustom
                                onPress={() => cancelRecord()}
                                style={styles.btn}>
                                <StopIcon
                                    fill={COLORS.ACCENT}
                                    width={hp(3.75)}
                                    height={hp(3.75)}
                                />
                            </TouchableCustom>

                            <CallSendIcon
                                fill={theme.WHITE_TO_BLACK}
                                width={hp(6.43)}
                                height={hp(6.43)}
                            />
                        </View>

                    </View>
            }
        </>
    )
}

export default ChatInput

const styles_ = (theme: ITHEME, isRecording: boolean) => StyleSheet.create({
    main: {
        width: wp(90),
        minHeight: hp(6.43),
        height: 'auto',
        borderRadius: hp(6.43) / 2,
        borderTopRightRadius: isRecording ? 0 : hp(6.43) / 2,
        backgroundColor: theme.BACKGROUND,
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    mainSound: {
        width: wp(100),
        minHeight: hp(14.69),
        height: 'auto',
        backgroundColor: theme.SOUND_CONTAINER,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%'
    },
    main1: {
        width: wp(90),
        minHeight: hp(6.43),
        height: 'auto',
        borderRadius: hp(6.43) / 2,
        borderTopRightRadius: isRecording ? 0 : hp(6.43) / 2,
        backgroundColor: theme.CHAT_BUBLE,
        paddingLeft: hp(1.215),
        paddingRight: isRecording ? 0 : hp(1.215),
    },
    container: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    roundBtn: {
        backgroundColor: COLORS.SECONDARY,
        width: hp(4),
        height: hp(4),
        borderRadius: hp(6),
        ...COMMON_STYLES.center_
    },
    input: {
        flex: 1,
        marginLeft: hp(1.215),
        height: hp(6.43),
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
    },
    line: {
        height: '70%',
        width: 1,
        borderRadius: 3,
        backgroundColor: theme.BORDER,
        marginRight: hp(1.215),
    },
    recordContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    txt: {
        fontSize: FONT_SIZE._16,
        color: theme.ACCENT,
        marginRight: hp(1.5),
        marginLeft: hp(0.5)
    },
    slideUpContainer: {
        width: hp(6.43),
        height: hp(10),
        borderTopLeftRadius: hp(6.43),
        borderTopRightRadius: hp(6.43),
        backgroundColor: theme.CHAT_BUBLE,
        position: 'absolute',
        right: 0,
        bottom: hp(6) - 0.25,
        alignItems: 'center',
        paddingTop: hp(1.75),
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2.5)
    },
    row1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        justifyContent: 'center',
        width: '100%'
    },
    row2: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: '100%'
    },
    txt1: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._12,
        color: COLORS.PRIMARY
    },
    txt2: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._12,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginBottom: hp(2.5)
    },
    line1: {
        width: '100%',
        height: 1 / 2,
        backgroundColor: theme.ACCENT
    },
    txt3: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: FONT_SIZE._20,
        color: theme.BLACK_TO_WHITE,
        position: 'absolute',
        left: 0
    },
    track: {
        width: wp(50),
        maxWidth: 500,
        height: hp(2.9),
        tintColor: theme.ACCENT,
        marginLeft: hp(2),
        alignSelf: 'center'
    },
    btn: {
        width: hp(6.43),
        height: hp(6.43),
        ...COMMON_STYLES.center_
    }
})