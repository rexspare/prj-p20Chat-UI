import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText } from '..';
import { IMAGES } from '../../assets/images';
import { ITHEME } from '../../models/config';
import useAppConfig from '../../hooks/AppConfig';
import { RecieveIcon, SendIcon } from '../../assets/icons';


interface historyItemProps {
    item: any;
    onPress?: Function
}

const HistoryItem: React.FC<historyItemProps> = (props) => {
    const { item, onPress } = props
    const { theme, lang } = useAppConfig()

    const styles = styles_(theme)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress && onPress()}
        >
            <View style={styles.icon}>
                {
                    item.isSent ?
                        <SendIcon width={hp(2.1)} height={hp(2.1)} />
                        :
                        <RecieveIcon width={hp(1.71)} height={hp(1.71)} />
                }
            </View>

            <View style={styles.container}>

                <View style={styles.row}>

                    <View style={styles.row1}>
                        <BodyText style={styles.name}>{lang[item?.isSent ? "_83" : "_82"]}</BodyText>

                        <View style={styles.bubble}>
                            <BodyText style={styles.txt}>{item.time}</BodyText>
                        </View>
                    </View>

                    <BodyText style={{
                        ...styles.priceTxt,
                        color: item.isSent ? COLORS.SUCCESS : COLORS.DANGER
                    }}>{`${item?.isSent ? "-" : "+"}${item.amount} ${item.shortName}`}</BodyText>
                </View>

                <View style={styles.row}>
                    <BodyText style={styles.shortName}>{`${lang["_84"]}: ${item.address}`}</BodyText>
                    <BodyText style={styles.shortName}>${item.price}</BodyText>
                </View>


            </View>



        </TouchableOpacity>
    )
}

export default React.memo(HistoryItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: COLORS.TRANSPARENT,
        paddingVertical: hp(1.9),
        ...COMMON_STYLES.flexRowSpaceBetween,
        borderBottomWidth: 1 / 2,
        borderColor: theme.BORDER
    },
    name: {
        marginVertical: 0,
        fontWeight: '500',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left'
    },
    shortName: {
        marginVertical: 0,
        fontSize: FONT_SIZE._12,
        color: theme.ACCENT,
        textAlign: 'left',
    },
    priceTxt: {
        marginVertical: 0,
        fontWeight: '500',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'right'
    },
    icon: {
        width: hp(4.82),
        height: hp(4.82),
        borderRadius: hp(1.6),
        ...COMMON_STYLES.center_,
        backgroundColor: COLORS.PRIMARY
    },
    container: {
        flex: 1,
        paddingLeft: hp(1.5),
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        flex: 1,
    },
    row1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    title: {
        fontWeight: '600',
        marginLeft: 10,
    },
    bubble: {
        backgroundColor: theme.mode == 'light' ? "#D9D9D9" : "#27273B",
        borderRadius: hp(2),
        paddingHorizontal: hp(1),
        paddingVertical: hp(0.3),
        marginLeft: hp(1)
    },
    txt: {
        fontSize: FONT_SIZE._10,
        color: theme.BLACK_TO_WHITE
    }
})