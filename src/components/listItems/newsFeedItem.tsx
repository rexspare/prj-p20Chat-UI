import React, { FC, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { BodyText, If, TouchableCustom } from '..'
import { HeartIcon, ShareIcon, VerifiedIcon } from '../../assets/icons'
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../../assets/stylesGuide'
import useAppConfig from '../../hooks/AppConfig'
import { ITHEME } from '../../models/config'
import { checkTextPressable, handleShare } from '../../utils/myUtils'

interface newsFeedItemProps {
    item: any;
}

const NewsFeedItem: FC<newsFeedItemProps> = (props) => {
    const { item } = props
    const { theme, lang } = useAppConfig()
    const styles = styles_(theme)
    const [isFavorite, setisFavorite] = useState(false)

    return (
        <View style={styles.main}>

            {/* USER DATA */}
            <View style={styles.container}>
                <Image
                    source={item.avatar}
                    style={styles.img}
                />

                <View style={styles.userContainer}>
                    <View>
                        <BodyText style={styles.title}>{item.user}</BodyText>
                        <BodyText style={styles.username}>{item.username}</BodyText>
                    </View>

                    <View style={styles.verified}>
                        <If condition={item.isVerified}>
                            <VerifiedIcon
                                width={hp(2)}
                                height={hp(2)}
                            />
                        </If>
                        <BodyText style={styles.time}>•{item.time}</BodyText>
                    </View>

                </View>
            </View>

            {/* POST DATA */}
            <View style={styles.container}>
                <View style={styles.img}></View>

                <View style={styles.context}>
                    <BodyText style={styles.txt1}>{
                        (item.desc?.split(' ')).map((txt: string, index: number) => (
                            <BodyText
                                key={index}
                                onPress={() => checkTextPressable(txt) && console.log(txt)}
                                style={checkTextPressable(txt) ? styles.txt2 : styles.txt1}>
                                {`${txt} `}
                            </BodyText>
                        ))
                    }</BodyText>

                    <Image
                        source={item.image}
                        style={styles.postImg}
                    />

                    <View style={styles.iconContainer}>
                        <TouchableCustom
                            style={styles.container}
                            onPress={() => setisFavorite(!isFavorite)}
                        >
                            <HeartIcon
                                fill={isFavorite ? COLORS.RED : theme.GREY_TO_WHITE}
                                width={hp(2.14)}
                                height={hp(2.14)}
                            />

                            <BodyText style={styles.txt3}>30.6k</BodyText>
                        </TouchableCustom>


                        <TouchableCustom
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

        </View>
    )
}

export default React.memo(NewsFeedItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: theme.BACKGROUND,
        marginBottom: hp(1.5),
        paddingHorizontal: hp(1.2),
        paddingTop: hp(1.3),
        borderRadius: hp(1),
    },
    img: {
        width: hp(5.47),
        height: hp(5.47),
        borderRadius: hp(5.47)
    },
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: hp(1.6),
    },
    context: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: hp(1.6),
    },
    title: {
        textAlign: 'left',
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._18,
        fontFamily: FONTS.MEDIUM
    },
    username: {
        textAlign: 'left',
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE._16,
        lineHeight: FONT_SIZE._24
    },
    container: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    time: {
        textAlign: 'left',
        color: theme.GREY_TO_WHITE,
        fontSize: FONT_SIZE._18,
        marginLeft: hp(3)
    },
    verified: {
        justifyContent: 'space-between',
        paddingLeft: hp(1),
        alignSelf: 'flex-end',
    },
    txt1: {
        textAlign: 'left',
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._14,
        marginVertical: hp(2)
    },
    txt2: {
        textAlign: 'left',
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE._14,
        marginVertical: hp(2)
    },
    postImg: {
        width: '100%',
        maxWidth: hp(31.8),
        height: hp(26.1),
        borderRadius: hp(1)
    },
    iconContainer: {
        width: '100%',
        maxWidth: hp(31.8),
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(1.5)
    },
    txt3: {
        fontSize: FONT_SIZE._16,
        color: theme.GREY_TO_WHITE,
        marginLeft: hp(1)
    }
})