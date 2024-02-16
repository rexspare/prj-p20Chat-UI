import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { BodyText, If, Label, Layout, NetworkItem, PrimaryButton, PrimaryInput, TokenItem } from '..';
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

interface settingModalProps {
    title: string;
    data?: any[];
    isVisible: boolean;
    onClose: Function;
    onSelect: Function
}

const SettingModal: React.FC<settingModalProps> = (props) => {
    const { title = "", data = [], isVisible, onClose, onSelect } = props
    const { lang } = useAppConfig()
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const styles = styles_(data?.length)

    const handleClose = () => {
        onClose()
    }

    const handleSelect = (val: any) => {
        onSelect(val)
        onClose()
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='slide'
            style={{ flex: 1 }}
            onRequestClose={() => handleClose()}
        >
            <View
                style={styles.main}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.main}
                    onPress={() => handleClose()}
                >

                </TouchableOpacity>

                <View style={[styles.container, styles.containerOuter]}>
                    <View style={[styles.container, styles.containerInner]}>
                        <Label size={normalize(15.5)}>{title}</Label>


                        <Layout containerStyle={{ marginTop: 10 }}>
                            {
                                data?.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.8}
                                        onPress={() => handleSelect(item)}
                                    >
                                        <BodyText style={styles.itemTxt}>{item.label}</BodyText>
                                    </TouchableOpacity>
                                ))
                            }

                        </Layout>


                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default SettingModal

const styles_ = (length: number) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        height: (hp(6) * length) + hp(10),
        minHeight: hp(25),
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
        paddingTop: hp(2.5),
        paddingVertical: hp(2.5),
    },
    itemTxt: {
        textAlign: 'left',
        paddingHorizontal: '5%',
        fontFamily: FONTS.MEDIUM,
        paddingVertical: hp(1)
    }

})