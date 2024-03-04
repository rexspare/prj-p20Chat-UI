import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { BodyText, Label, TouchableCustom } from '..'
import { SCREENS } from '../../assets/constants'
import { HeartIcon, ShareIcon } from '../../assets/icons'
import { COLORS, COMMON_STYLES, FONT_SIZE, hp } from '../../assets/stylesGuide'
import useAppConfig from '../../hooks/AppConfig'
import { ITHEME } from '../../models/config'
import { newsStateSelectors, useNews } from '../../states/news'
import { handleShare } from '../../utils/myUtils'

interface newsItem {
    item: any;
}

const NewsItem: FC<newsItem> = (props) => {
    const { item } = props
    const { theme, lang } = useAppConfig()
    const navigation = useNavigation()
    const setselectedNews = useNews(newsStateSelectors.setselectedNews)
    const styles = styles_(theme)
    const [isFavorite, setisFavorite] = useState(false)


    const handleSelect = () => {
        setselectedNews(item)
        navigation.navigate(SCREENS.NEWS_DETAIL)
    }

    return (
        <TouchableOpacity
            style={styles.main}
            onPress={() => handleSelect()}
        >
            <Image
                source={item.cover}
                style={styles.img}
            />

            <View style={styles.context}>
                <Label style={styles.title}>{item.title}</Label>
                <BodyText style={styles.txt1}>{item.readTime} {lang['_67']}</BodyText>

                <View style={styles.container}>
                    <BodyText style={styles.txt2}>{item.time}</BodyText>

                    <View style={styles.container}>
                        <TouchableCustom
                            onPress={() => setisFavorite(!isFavorite)}
                        >
                            <HeartIcon
                                fill={isFavorite ? COLORS.RED : theme.GREY_TO_WHITE}
                                width={hp(2.14)}
                                height={hp(2.14)}
                            />
                        </TouchableCustom>


                        <TouchableCustom
                            style={styles.icon}
                            onPress={() => handleShare(item.title)}
                        >
                            <ShareIcon
                                fill={theme.GREY_TO_WHITE}
                                width={hp(2.14)}
                                height={hp(2.14)}
                            />
                        </TouchableCustom>

                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default React.memo(NewsItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: theme.BACKGROUND,
        marginBottom: hp(1.5),
        borderRadius: hp(2.6),
        flexDirection: 'row',
        paddingHorizontal: hp(1.2),
        paddingVertical: hp(1.3),
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1 / 3,
    },
    img: {
        width: hp(12.3),
        height: hp(12.3),
        borderRadius: hp(2.6)
    },
    context: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: hp(1.6),
    },
    title: {
        textAlign: 'left',
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._14,
    },
    txt1: {
        textAlign: 'left',
        color: theme.ACCENT,
        fontSize: FONT_SIZE._12,
    },
    container: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    txt2: {
        textAlign: 'left',
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE._12,
    },
    icon: {
        marginLeft: hp(2),
        marginRight: hp(1),
    }
})