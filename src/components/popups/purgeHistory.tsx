import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { BodyText, Label, TextButton } from '..';

interface purgeHistoryProps {
    isVisible: boolean;
    onClose: Function;
}

const PurgeHistoryModal: FC<purgeHistoryProps> = (props) => {
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
                    <Label style={styles.title}>{`${lang['_93']}`}</Label>

                    <BodyText style={styles.subtle}>{lang['_94']}</BodyText>

                    <View style={styles.row}>
                        <TextButton
                            title={lang['_95']}
                            textStyle={styles.btnTxt}
                            onPress={() => onClose()}
                        />
                        <TextButton
                            title={lang['_96']}
                            style={styles.btn}
                            textStyle={styles.btnTxt1}
                            onPress={() => onClose()}
                        />

                    </View>

                </TouchableOpacity>

            </TouchableOpacity>

        </Modal>
    )
}

export default PurgeHistoryModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
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
        color: theme.ACCENT,
        fontWeight: '400',
        fontSize: FONT_SIZE._14
    },
    subtle: {
        textAlign: 'left',
        color: theme.BLACK_TO_WHITE,
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
        fontWeight: '400'
    },
    btnTxt1: {
        fontWeight: '700',
        color: COLORS.RED
    }
})