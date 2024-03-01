import React, { FC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, Layout, TextButton } from '..';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';

interface selectSoundProps {
    isVisible: boolean;
    onClose: Function;
}

const SelectSoundModal: FC<selectSoundProps> = (props) => {
    const {
        isVisible,
        onClose = () => { }
    } = props

    const [selected, setselected] = useState(1)

    const {
        lang,
        theme,
    } = useAppConfig()

    const styles = styles_(theme)

    const SOUND_LIST = [
        {
            id: 1,
            title: "Default notification sound",
        },
        {
            id: 2,
            title: "Sound 1",
        },
        {
            id: 4,
            title: "Sound 2",
        },
        {
            id: 5,
            title: "Sound 3",
        },
        {
            id: 6,
            title: "Sound 4",
        },
        {
            id: 7,
            title: "Sound 5",
        },
        {
            id: 8,
            title: "Sound 6",
        },
        {
            id: 9,
            title: "Sound 7",
        },
        {
            id: 10,
            title: "Sound 8",
        },
        {
            id: 11,
            title: "Sound 9",
        },
        {
            id: 12,
            title: "Sound 10",
        },
        {
            id: 13,
            title: "Sound 11",
        },
    ]


    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType='fade'
            style={{ flex: 1 }}
        >
            <View style={styles.main} >
                <View style={styles.container} >

                    <BodyText style={styles.title}>{lang['_168']}</BodyText>

                    <Layout>
                        <View>
                            {
                                (SOUND_LIST).map((item, index) => (
                                    <View
                                        key={index}
                                        style={styles.row1}>

                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPressIn={() => setselected(item.id)}
                                            style={[styles.outerCirle, {
                                                ...(selected == item.id && { borderColor: COLORS.SECONDARY })
                                            }]}>
                                            {selected == item.id && <View style={styles.innerCirle}></View>}
                                        </TouchableOpacity>

                                        <BodyText style={styles.txt}>{item.title}</BodyText>
                                    </View>
                                ))
                            }
                        </View>

                        <View style={styles.row}>
                            <TextButton
                                title={lang['_40']}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                textStyle={styles.btnTxt}
                                onPress={() => onClose()}
                            />

                            <TextButton
                                title={lang['_41']}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                style={styles.btn}
                                textStyle={styles.btnTxt}
                                onPress={() => onClose()}
                            />
                        </View>
                    </Layout>

                </View>

            </View>

        </Modal>
    )
}

export default SelectSoundModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        ...COMMON_STYLES.center_
    },
    container: {
        width: wp(90),
        maxWidth: 500,
        height: hp(85),
        backgroundColor: theme.CHAP_POPUP,
        paddingHorizontal: '6%',
        paddingVertical: hp(2.5),
        borderRadius: hp(2)
    },
    title: {
        textAlign: 'left',
        color: theme.ACCENT,
        fontSize: FONT_SIZE._16,
        marginBottom: hp(1.5)
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
        fontFamily: FONTS.REGULAR
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1.75)
    },
    outerCirle: {
        width: hp(2.46),
        height: hp(2.46),
        borderRadius: hp(2.46),
        borderWidth: 2,
        ...COMMON_STYLES.center_,
        borderColor: theme.BLACK_TO_WHITE
    },
    innerCirle: {
        width: hp(1.5),
        height: hp(1.5),
        borderRadius: hp(1.5),
        backgroundColor: COLORS.SECONDARY
    },
    txt: {
        color: theme.BLACK_TO_WHITE,
        marginLeft: hp(1)
    }
})