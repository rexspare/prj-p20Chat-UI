import React, { FC } from 'react';
import { ActivityIndicator, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, TextButton } from '..';
import { THEMES } from '../../assets/constants';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { isDefaultThemeSupported } from '../../utils/myUtils';

interface appThemeProps {
    isVisible: boolean;
    onClose: Function;
}

const AppThemeModal: FC<appThemeProps> = (props) => {
    const {
        isVisible,
        onClose = () => { }
    } = props

    const { lang, theme, handleChangeTheme, isLoading, activetheme,} = useAppConfig()

    const styles = styles_(theme)

    const THEMES_LIST = [
        {
            id: 2,
            title: lang['_141'],
            lable: lang['_141'],
            value: THEMES.LIGHT
        },
        {
            id: 3,
            title: lang['_142'],
            lable: lang['_142'],
            value: THEMES.DARK
        }
    ]

    const THEMES_LIST_WITH_DEFALUT = [
        {
            id: 1,
            title: lang['_140'],
            lable: lang['_143'],
            value: THEMES.DEFAULT
        },
        {
            id: 2,
            title: lang['_141'],
            lable: lang['_141'],
            value: THEMES.LIGHT
        },
        {
            id: 3,
            title: lang['_142'],
            lable: lang['_142'],
            value: THEMES.DARK
        }
    ]

    const handleChange = async (item: any) => {
        handleChangeTheme(item.value)
    }

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

                    <BodyText style={styles.title}>{lang['_144']}</BodyText>

                    <View>
                        {
                            (isDefaultThemeSupported() ? THEMES_LIST_WITH_DEFALUT : THEMES_LIST).map((item, index) => (
                                <View
                                    key={index}
                                    style={styles.row1}>

                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => handleChange(item)}
                                        style={[styles.outerCirle, {
                                            ...(activetheme == item.value && { borderColor: COLORS.SECONDARY })
                                        }]}>
                                        {activetheme == item.value && <View style={styles.innerCirle}></View>}
                                    </TouchableOpacity>

                                    <BodyText style={styles.txt}>{item.title}</BodyText>
                                </View>
                            ))
                        }
                    </View>

                    <View style={styles.row}>
                        <TextButton
                            title={lang['_40']}
                            textStyle={styles.btnTxt}
                            onPress={() => onClose()}
                        />
                        {
                            isLoading ?
                                <ActivityIndicator
                                    color={COLORS.SECONDARY}
                                    style={styles.btn}
                                />
                                :
                                <TextButton
                                    title={lang['_41']}
                                    style={styles.btn}
                                    textStyle={styles.btnTxt}
                                    onPress={() => onClose()}
                                />
                        }

                    </View>

                </TouchableOpacity>

            </TouchableOpacity>

        </Modal>
    )
}

export default AppThemeModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
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