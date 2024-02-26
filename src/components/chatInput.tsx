import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import useAppConfig from '../hooks/AppConfig'
import { ITHEME } from '../models/config'
import { hp, wp, COMMON_STYLES, COLORS, FONTS, FONT_SIZE } from '../assets/stylesGuide'
import { LeftChevIcon, LockIcon, MicIcon } from '../assets/icons'
import Feather from 'react-native-vector-icons/Feather'
import { inboxStateSelectors, useInbox } from '../states/inbox'
import { BodyText, If } from '.'
import { formatSeconds } from '../utils/myUtils'

import SwipeButton from 'rn-swipe-button';
interface chatInputProps {
    toggleMediaPicker: Function;
}

const ChatInput: FC<chatInputProps> = (props) => {
    const {
        toggleMediaPicker = () => { }
    } = props

    const { theme, lang } = useAppConfig()
    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)

    // AUDIOSTATES
    const [isRecording, setisRecording] = useState(false)
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
        setisRecording(false)
    }


    return (
        <View style={styles.main}>
        <View style={styles.main1}>
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
                            onPress={() => toggleMediaPicker()}
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
                onLongPress={() => handleRecord()}
                onPressOut={() => handleReleaseRecord()}
            >
                <MicIcon
                    fill={theme.WHITE_TO_BLACK}
                    width={hp(2.4)}
                    height={hp(2)}
                />
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
    main1: {
        width: wp(90),
        minHeight: hp(6.43),
        height: 'auto',
        borderRadius: hp(6.43) / 2,
        borderTopRightRadius: isRecording ? 0 : hp(6.43) / 2,
        backgroundColor: theme.CHAT_BUBLE,
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingLeft: hp(1.215),
        paddingRight: isRecording ? 0 : hp(1.215),
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
        bottom: hp(6.43) - 0.25,
        alignItems: 'center',
        paddingTop: hp(1.75)
    }
})