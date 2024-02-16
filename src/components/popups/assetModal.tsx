import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, hp, normalize } from '../../assets/stylesGuide'
import { AccountItem, Label, Layout, PrimaryButton, RecieveTokenItem } from '..';
import useAppConfig from '../../hooks/AppConfig';
import { isIOS } from '../../utils/myUtils';
import { IMAGES } from '../../assets/images';


const TOKENS = [
    {
        id: 1,
        name: 'PVT-USD',
        shortName: "PVT-USD",
        icon: IMAGES.RECIEVE_PVT
    },
    {
        id: 2,
        name: 'Etherium',
        shortName: "Eth",
        icon: IMAGES.RECIEVE_ETH
    },
    {
        id: 3,
        name: 'LIF3',
        shortName: "LIF3",
        icon: IMAGES.RECIEVE_LIF3
    },
    {
        id: 4,
        name: 'Solana',
        shortName: "SOL",
        icon: IMAGES.RECIEVE_SOLANA
    },
    {
        id: 5,
        name: 'TRON',
        shortName: "TRON",
        icon: IMAGES.RECIEVE_TRON
    },
]

interface assetModalProps {
    isVisible: boolean;
    onClose: Function;
    onPress?: Function;
    onSelect?: Function;
}

const AssetModal: React.FC<assetModalProps> = (props) => {
    const { isVisible, onClose, onPress = () => { }, onSelect = () => { } } = props
    const { lang } = useAppConfig()
    const [selected, setselected] = useState<any>({ id: 0 })

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
                        <Label size={normalize(15.5)}>{lang['_215']}</Label>

                        <Layout contentContainerStyle={{ paddingTop: hp(1.5) }}>
                            {
                                TOKENS.map((item, index) => (
                                    <RecieveTokenItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        onselect={() => setselected(item)}
                                        selected={selected}
                                        style={{
                                            marginTop: hp(0.8)
                                        }}
                                    />
                                ))
                            }
                        </Layout>

                        {/* BUTTON CONTAINER */}
                        <View style={styles.btnConatiner}>
                            <PrimaryButton
                                title={lang['_215']}
                                onPress={() => handleSelect()}
                                disabled={selected == null}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default AssetModal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        minHeight: hp(65),
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