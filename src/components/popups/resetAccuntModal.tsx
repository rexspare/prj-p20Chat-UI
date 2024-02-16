import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, Label, PrimaryButton } from '..';
import { COLORS, COMMON_STYLES, FONTS, hp, normalize } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';

interface resetAccountModalProps {
    isVisible: boolean;
    onClose: Function;
}

const ResetAccountModal: React.FC<resetAccountModalProps> = (props) => {
    const { isVisible, onClose } = props
    const { lang } = useAppConfig()

    const handleClose = () => {
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

                    <Label size={normalize(15.5)}>{lang['_148']}?</Label>

                    <BodyText
                        style={styles.subtle}
                    >{lang['_161']}</BodyText>

                    {/* BUTTON CONTAINER */}
                    <View style={styles.btnConatiner}>

                        <PrimaryButton
                            title={lang['_71']}
                            style={[styles.btnStyle, { borderColor: COLORS.DISABLED }]}
                            textStyle={{ color: COLORS.DISABLED }}
                            onPress={() => handleClose()}

                        />
                        <PrimaryButton
                            title={lang['_162']}
                            style={styles.btnStyle2}
                            onPress={() => handleClose()}
                            filled={true}
                        />

                    </View>

                </TouchableOpacity>

            </TouchableOpacity>



        </Modal>
    )
}

export default ResetAccountModal

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
    },
    subtle: {
        fontFamily: FONTS.MEDIUM,
        paddingVertical: hp(2.2),
        lineHeight: normalize(18),
    },
    btnConatiner: {
        width: '90%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    btnStyle: {
        width: '47%'
    },
    btnStyle2: {
        width: '47%',
        backgroundColor: COLORS.RED,
        borderColor: COLORS.RED
    }
})