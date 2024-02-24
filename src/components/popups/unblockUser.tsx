import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { BodyText, Label, TextButton } from '..';

interface unblockUserProps {
    isVisible: boolean;
    onClose: Function;
    user: any;
}

const UnblockUserModal: FC<unblockUserProps> = (props) => {
    const {
        isVisible,
        onClose = () => { },
        user
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

                    <TextButton
                        title={`${lang['_170']} ${user?.name}`}
                        textStyle={styles.btnTxt}
                        onPress={() => onClose()}
                    />

                </TouchableOpacity>

            </TouchableOpacity>

        </Modal>
    )
}

export default UnblockUserModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
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
    btn: {
        marginLeft: hp(4)
    },
    btnTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._16
    }
})