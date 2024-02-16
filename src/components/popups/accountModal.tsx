import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, hp, normalize } from '../../assets/stylesGuide'
import { AccountItem, Label, Layout, PrimaryButton } from '..';
import useAppConfig from '../../hooks/AppConfig';
import { isIOS } from '../../utils/myUtils';
import { useWallet, walletStateSelectors } from '../../states/walllet';

interface accountModalProps {
    isVisible: boolean;
    onClose: Function;
    onPress?: Function;
    btnTitle?: string;
    onSelect?: Function;
}

const AccountModal: React.FC<accountModalProps> = (props) => {
    const { isVisible, onClose, onPress = () => { }, btnTitle, onSelect = () => { } } = props
    const { lang } = useAppConfig()

    const selected = useWallet(walletStateSelectors.selectedAccount)
    const setselected = useWallet(walletStateSelectors.setSelectedAccount)

    const handleSelect = () => {
        onSelect(selected)
        onClose()
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='slide'
            style={{ flex: 1 }}
            onRequestClose={() => onClose()}
        >
            <View
                style={styles.main}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.main}
                    onPress={() => onClose()}
                >

                </TouchableOpacity>

                <View style={[styles.container, styles.containerOuter]}>
                    <View style={[styles.container, styles.containerInner]}>
                        <Label size={normalize(15.5)}>{lang['_59']}</Label>

                        <Layout>
                            {
                                [{ id: 1, name: "Account 1" }, { id: 2, name: "Account 2" }].map((item, index) => (
                                    <AccountItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        onselect={() => setselected(item)}
                                        selected={selected?.id}
                                    />
                                ))
                            }
                        </Layout>

                        {/* BUTTON CONTAINER */}
                        <View style={styles.btnConatiner}>
                            <PrimaryButton
                                title={btnTitle || lang['_60']}
                                onPress={() => handleSelect()}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default AccountModal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        minHeight: hp(55),
        maxHeight: hp(85),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.BACKGROUND,
    },
    containerOuter: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: COLORS.BLACK_OPACITY,
    },
    containerInner: {
        paddingVertical: hp(2.5),
        paddingHorizontal: '6%'
    },
    btnConatiner: {
        width: '100%',
        alignSelf: 'center',
    },
})