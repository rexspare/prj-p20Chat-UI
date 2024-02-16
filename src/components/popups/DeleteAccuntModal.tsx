import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from '../../assets/stylesGuide'
import { AccountItem, BodyText, Label, Layout, PrimaryButton } from '..';
import useAppConfig from '../../hooks/AppConfig';
import { isIOS } from '../../utils/myUtils';
import { DangerIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../assets/constants';

interface deletAccountModalProps {
    isVisible: boolean;
    onClose: Function;
}

const DeleteAccountModal: React.FC<deletAccountModalProps> = (props) => {
    const { isVisible, onClose } = props
    const { lang } = useAppConfig()
    const navigation = useNavigation()

    const handleClose = () => {
        onClose()
    }

    const handleDelete = () => {
        navigation.navigate(SCREENS.COMFIRM_PASSWORD)
        onClose()
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='fade'
            style={{ flex: 1 }}
            onRequestClose={() => onClose()}
        >

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.main}
                onPress={() => onClose()}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    disabled={true}
                    style={styles.container}>

                    <DangerIcon />

                    <Label style={styles.title} >{lang['_164']}</Label>


                    <BodyText
                        style={styles.subtle}
                    >{lang['_165']}</BodyText>

                    {/* BUTTON CONTAINER */}
                    <View style={styles.btnConatiner}>

                        <PrimaryButton
                            title={lang['_166']}
                            style={styles.btnStyle2}
                            onPress={() => handleDelete()}
                            filled={true}
                        />

                        <PrimaryButton
                            title={lang['_167']}
                            style={[styles.btnStyle, { borderColor: COLORS.DISABLED }]}
                            textStyle={{ color: COLORS.DISABLED }}
                            onPress={() => handleClose()}

                        />

                    </View>

                </TouchableOpacity>

            </TouchableOpacity>



        </Modal>
    )
}

export default DeleteAccountModal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: COLORS.BACKGROUND,
        paddingVertical: hp(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: normalize(15.5),
        color: COLORS.RED,
        fontFamily: FONTS.BOLD,
        paddingVertical: hp(2.2),
    },
    subtle: {
        lineHeight: normalize(18),
        paddingHorizontal: '6%',
        fontFamily: FONTS.MEDIUM
    },
    btnConatiner: {
        width: '90%',
        alignSelf: 'center',
        marginTop: hp(4)
    },
    btnStyle: {
        width: '80%'
    },
    btnStyle2: {
        width: '80%',
        backgroundColor: COLORS.RED,
        borderColor: COLORS.RED
    }
})