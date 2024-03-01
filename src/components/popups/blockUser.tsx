import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { BodyText, Label, TextButton } from '..';

interface blockUserProps {
    isVisible: boolean;
    onClose: Function;
}

const BlockUserModal: FC<blockUserProps> = (props) => {
    const {
        isVisible,
        onClose = () => { }
    } = props

    const { lang, theme } = useAppConfig()
    const selectedChats = useInbox(inboxStateSelectors.selectedChats)
    const openedChat = useInbox(inboxStateSelectors.openedChat)

    const styles = styles_(theme)

    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType='fade'
            style={{ flex: 1 }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => onClose()}
                style={styles.main}
            >

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { }}
                    style={styles.container}
                >
                    <Label style={styles.title}>{`${lang['_38']} ${openedChat?.name || selectedChats[0]?.name}?`}</Label>

                    <BodyText style={styles.subtle}>{lang['_39']}</BodyText>

                    <View style={styles.row}>
                        <TextButton
                            title={lang['_40']}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            textStyle={styles.btnTxt}
                            onPress={() => onClose()}
                        />
                        <TextButton
                            title={lang['_41']}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            style={styles.btn}
                            textStyle={styles.btnTxt}
                            onPress={() => onClose()}
                        />

                    </View>

                </TouchableOpacity>

            </TouchableOpacity>

        </Modal>
    )
}

export default BlockUserModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        ...COMMON_STYLES.center_
    },
    container: {
        width: wp(75),
        maxWidth: 500,
        backgroundColor: theme.CHAP_POPUP,
        paddingHorizontal: '6%',
        paddingVertical: hp(2.5),
        borderRadius: hp(2)
    },
    title: {
        textAlign: 'left',
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.EXTRA_BOLD,
        fontSize: FONT_SIZE._16
    },
    subtle: {
        textAlign: 'left',
        color: theme.ACCENT,
        fontSize: FONT_SIZE._16,
        marginVertical: hp(1.4)
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        justifyContent: 'flex-end',
        marginTop: hp(1.5)
    },
    btn: {
        marginLeft: hp(4)
    },
    btnTxt: {
        fontFamily: FONTS.REGULAR
    }
})