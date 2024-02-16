import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize } from '../../assets/stylesGuide'
import { AccountItem, BodyText, CustomSwitch, Label, Layout, PrimaryButton } from '..';
import useAppConfig from '../../hooks/AppConfig';
import { isIOS } from '../../utils/myUtils';

interface transactionSettingModalProps {
    isVisible: boolean;
    onClose: Function;
}

const TransactionSettingModal: React.FC<transactionSettingModalProps> = (props) => {
    const { isVisible, onClose } = props
    const { lang } = useAppConfig()
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [selectedTolerance, setselectedTolerance] = useState('2%')

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

                <View style={[styles.container]}>
                    <Layout fixed={true}>
                        <Label size={normalize(15.5)}>{lang['_105']}</Label>

                        <View style={styles.smartContainer}>
                            <BodyText>{lang['_106']}</BodyText>

                            <View style={styles.switchContainer}>
                                <CustomSwitch
                                    isEnabled={isEnabled}
                                    setIsEnabled={setIsEnabled}
                                />
                                <BodyText>{lang['_110']}</BodyText>
                            </View>

                        </View>

                        <BodyText style={styles.tolTxt}>{lang['_107']}</BodyText>

                        <View style={styles.rowBtn}>
                            <PrimaryButton
                                title={'2%'}
                                onPress={() => setselectedTolerance('2%')}
                                icon={true}
                                textStyle={{
                                    ...styles.chiptxt,
                                    color: selectedTolerance == '2%' ? COLORS.WHITE : COLORS.TEXT
                                }}
                                style={styles.chipBtn}
                                filled={selectedTolerance == '2%'}
                            />
                            <PrimaryButton
                                title={'3%'}
                                onPress={() => setselectedTolerance('3%')}
                                icon={true}
                                textStyle={{
                                    ...styles.chiptxt,
                                    color: selectedTolerance == '3%' ? COLORS.WHITE : COLORS.TEXT
                                }}
                                style={styles.chipBtn}
                                filled={selectedTolerance == '3%'}
                            />
                            <PrimaryButton
                                title={lang['_108']}
                                onPress={() => setselectedTolerance('Custom')}
                                icon={true}
                                textStyle={{
                                    ...styles.chiptxt,
                                    color: selectedTolerance == 'Custom' ? COLORS.WHITE : COLORS.TEXT
                                }}
                                style={styles.chipBtn}
                                filled={selectedTolerance == 'Custom'}
                            />
                        </View>

                    </Layout>

                    {/* BUTTON CONTAINER */}
                    <View style={styles.btnConatiner}>
                        <PrimaryButton
                            title={lang['_109']}
                            onPress={() => onClose()}
                        />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default TransactionSettingModal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        minHeight: hp(47),
        maxHeight: hp(55),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.BACKGROUND,
        paddingVertical: hp(2.5),
        paddingHorizontal: '8%'
    },
    smartContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2)
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tolTxt: {
        textAlign: 'left',
        marginTop: hp(2)
    },
    rowBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    chipBtn: {
        height: hp(4),
        marginRight: 15
    },
    chiptxt: {
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR
    },
    btnConatiner: {
        width: '100%',
        alignSelf: 'center',
    },
})