import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { BodyText, If, Label, Layout, NetworkItem, PrimaryButton, PrimaryInput } from '..';
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IMAGES } from '../../assets/images';
import { TOKENS } from '../../data';
import { useWallet, walletStateSelectors } from '../../states/walllet';


interface networkModalProps {
    isVisible: boolean;
    onClose: Function;
    addNetwork?: Function;
}

const NetworkModal: React.FC<networkModalProps> = (props) => {
    const { isVisible, onClose } = props
    const { lang } = useAppConfig()
    const selectedToken = useWallet(walletStateSelectors.selectedToken)
    const setSelectedToken = useWallet(walletStateSelectors.setSelectedToken)

    const layout = useWindowDimensions();

    const [isAdding, setisAdding] = useState(false)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: lang['_64'] },
        { key: 'second', title: lang['_65'] },
    ]);
    const [networkName, setnetworkName] = useState('')
    const [RPCurl, setRPCurl] = useState('')
    const [chainID, setchainID] = useState('')
    const [symbol, setsymbol] = useState('')
    const [blockexplorerUrl, setblockexplorerUrl] = useState('')

    const styles = styles_(isAdding, index)

    const renderScene = SceneMap({
        first: () => (
            <FlatList
                data={TOKENS}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: hp(3), paddingHorizontal: '4%' }}
                renderItem={({ item, index }) =>
                    <NetworkItem
                        key={index}
                        item={item}
                        index={index}
                    />}
            />
        ),
        second: () => (
            <Layout containerStyle={styles.customNetworkContainer}>
                <PrimaryInput
                    title={lang['_66']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={networkName}
                // onChange={(txt) => setnetworkName(txt)}
                />

                <PrimaryInput
                    title={lang['_67']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={RPCurl}
                // onChange={(txt) => setRPCurl(txt)}
                />

                <PrimaryInput
                    title={lang['_68']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={chainID}
                // onChange={(txt) => setchainID(txt)}
                />

                <PrimaryInput
                    title={lang['_69']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={symbol}
                // onChange={(txt) => setsymbol(txt)}
                />

                <PrimaryInput
                    title={lang['_70']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={blockexplorerUrl}
                // onChange={(txt) => setblockexplorerUrl(txt)}
                />

                <View style={styles.customBtnContainer}>

                    <PrimaryButton
                        title={lang['_71']}
                        style={[styles.btnStyle, { borderColor: COLORS.DISABLED }]}
                        textStyle={{ color: COLORS.DISABLED }}
                        onPress={() => handleClose()}

                    />
                    <PrimaryButton
                        title={lang['_72']}
                        style={styles.btnStyle}
                        onPress={() => handleClose()}
                    />

                </View>

            </Layout>
        ),
    });


    const handleClose = () => {
        onClose()
        setisAdding(false)
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
                        <Label size={normalize(15.5)}>{lang['_61']}</Label>

                        {
                            isAdding ?
                                <Layout fixed={true} containerStyle={{ marginTop: 10 }}>
                                    <TabView
                                        navigationState={{ index, routes }}
                                        renderScene={renderScene}
                                        onIndexChange={setIndex}
                                        initialLayout={{ width: layout.width }}
                                        renderTabBar={props => <TabBar
                                            {...props}
                                            activeColor={COLORS.PRIMARY}
                                            inactiveColor={COLORS.TEXT}
                                            indicatorStyle={{ backgroundColor: COLORS.PRIMARY }}
                                            style={{ backgroundColor: COLORS.BACKGROUND }}
                                            renderLabel={({ route, focused, color }) => (
                                                <BodyText style={{ color, fontSize: normalize(12), marginVertical: 0 }}>
                                                    {route.title}
                                                </BodyText>
                                            )}
                                        />}
                                    />
                                </Layout>
                                :
                                <Layout containerStyle={{ marginTop: 10 }}>
                                    {
                                        TOKENS.slice(0, 4).map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                activeOpacity={0.8}
                                                onPress={() => {
                                                    setSelectedToken(item)
                                                    handleClose()
                                                }}
                                            >
                                                <NetworkItem
                                                    item={item}
                                                    index={index}
                                                    hideButton={true}
                                                />
                                            </TouchableOpacity>
                                        ))
                                    }
                                </Layout>
                        }

                        {/* BUTTON CONTAINER */}
                        <If condition={isAdding == false}>
                            <View style={styles.btnConatiner}>
                                <PrimaryButton
                                    title={lang['_62']}
                                    onPress={() => setisAdding(true)}
                                />
                            </View>
                        </If>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default NetworkModal

const styles_ = (isAdding: boolean, index: number) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BLACK_OPACITY,
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        minHeight: isAdding ? hp(85) : hp(55),
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
        paddingVertical: (isAdding && index == 0) ? 0 : hp(2.5),
        paddingHorizontal: isAdding ? 0 : '4%'
    },
    btnConatiner: {
        width: '90%',
        alignSelf: 'center',
    },
    inputTitle: {
        fontFamily: FONTS.REGULAR
    },
    input: {
        marginBottom: 0
    },
    customNetworkContainer: {
        paddingHorizontal: '4%'
    },
    textInput: {
        height: hp(5.5)
    },
    customBtnContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(3)
    },
    btnStyle: {
        width: '45%'
    }
})