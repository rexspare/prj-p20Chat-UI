import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { BodyText, If, Label, Layout, NetworkItem, PrimaryButton, PrimaryInput, TokenItem } from '..';
import { COLORS, FONTS, hp, normalize, COMMON_STYLES } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

interface tokenModalProps {
    isVisible: boolean;
    onClose: Function;
}

const TokenModal: React.FC<tokenModalProps> = (props) => {
    const { isVisible, onClose } = props
    const { lang } = useAppConfig()
    const layout = useWindowDimensions();

    const [isAdding, setisAdding] = useState(true)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: lang['_74'] },
        { key: 'second', title: lang['_75'] },
    ]);
    const [tokenAddress, settokenAddress] = useState('')
    const [tokenSymbol, settokenSymbol] = useState('')
    const [tokenDecimal, settokenDecimal] = useState('')
    const [search, setsearch] = useState('')

    const styles = styles_(index)
    const renderScene = SceneMap({
        first: () => (
            <Layout fixed={true} containerStyle={[styles.customNetworkContainer, { marginTop: 10 }]}>
                <PrimaryInput
                    hideTitle={true}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={search}
                    placeholder={lang['_74']}
                // onChange={(txt) => setsearch(txt)}
                />

                <If condition={search != ''}>
                    <BodyText style={styles.searchResultTitle}>{lang['_79']}</BodyText>
                    <FlatList
                        data={[{}, {},]}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: hp(3), }}
                        renderItem={({ item, index }) =>
                            <NetworkItem
                                key={index}
                                item={item}
                                index={index}
                                hideButton={true}
                                style={styles.searchItem}
                            />}
                    />
                </If>

            </Layout>
        ),
        second: () => (
            <Layout containerStyle={styles.customNetworkContainer}>
                <PrimaryInput
                    title={lang['_76']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={tokenAddress}
                // onChange={(txt) => settokenAddress(txt)}
                />

                <PrimaryInput
                    title={lang['_77']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={tokenSymbol}
                // onChange={(txt) => settokenSymbol(txt)}
                />

                <PrimaryInput
                    title={lang['_78']}
                    titleStyles={styles.inputTitle}
                    containerStyles={styles.input}
                    inputStyles={styles.textInput}
                    value={tokenDecimal}
                // onChange={(txt) => settokenDecimal(txt)}
                />
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
                        <Label size={normalize(15.5)}>{lang['_73']}</Label>


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


                        {/* BUTTON CONTAINER */}
                        <View style={styles.btnConatiner}>

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
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default TokenModal

const styles_ = (index: number) => StyleSheet.create({
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
        paddingTop: hp(2.5),
        paddingVertical: hp(2.5),
    },
    btnConatiner: {
        width: '90%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    inputTitle: {
        fontFamily: FONTS.REGULAR
    },
    input: {
        marginBottom: 0
    },
    customNetworkContainer: {
        paddingHorizontal: '4%',
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
    },
    searchResultTitle: {
        fontFamily: FONTS.MEDIUM,
        fontSize: normalize(12),
        textAlign: 'left'
    },
    searchItem: {
        borderWidth: 1.2,
        paddingHorizontal: '4%',
        borderRadius: 50,
        marginVertical: 5,
        borderColor: COLORS.PRIMARY
    }
})