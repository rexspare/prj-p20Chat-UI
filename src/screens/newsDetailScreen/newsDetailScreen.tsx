import { ImageBackground, StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'
import { newsStateSelectors, useNews } from '../../states/news'
import { FEED_AVATARS, NEWS_IMAGES } from '../../assets/images/dummy'
import { AppHeader, BodyText, Label, Layout, TouchableCustom } from '../../components'
import { COLORS, hp } from '../../assets/stylesGuide'
import { HeartIcon, ShareIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { handleShare } from '../../utils/myUtils'

const tags = [
    "Trendy",
    "Crypto",
]

const NewsDetailScreen = () => {
    const { lang, theme } = useAppConfig()
    const selectedNews = useNews(newsStateSelectors.selectedNews)
    const [isFavorite, setisFavorite] = useState(false)
    const styles = styles_(theme)

    const desc = `Stay on top of the blockchain and cryptocurrency world with an app from Cointelegraph — a top Web3 media outlet. Download the app,\n\ncalledCointelegraph:\n\nCrypto News, to keep up to speed with the latest trends and breaking news in the crypto world.\n\nStay on top of the blockchain and cryptocurrency world with an app from Cointelegraph — a  top Web3 media outlet. Download the app, called Cointelegraph: Crypto News, to keep up to speed with the latest trends and breaking news in the crypto world.\n\n`

    return (
        <ImageBackground
            source={NEWS_IMAGES.COIN_BG}
            style={styles.main}
        >
            <ImageBackground
                source={IMAGES.SCREEN_SHADOW}
                style={styles.main}
            >
                <AppHeader
                    iconColor={COLORS.WHITE}
                />

                <Layout containerStyle={styles.container}>

                    <View style={styles.tagsContainer}>
                        {
                            tags.map((tag, index) => (
                                <TouchableCustom style={styles.tag}>
                                    <BodyText style={styles.tagTxt}>{tag}</BodyText>
                                </TouchableCustom>
                            ))
                        }
                    </View>

                    <Label style={styles.txt}>{`Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up; Dogecoinn surges 25`}</Label>

                    {/* PUBLISHER */}
                    <View style={styles.publisher}>
                        <View style={styles.pubContainerName}>
                            <Image
                                source={FEED_AVATARS.AVATAR1}
                                style={styles.pubImg}
                            />
                            <View >
                                <Label style={styles.pubName}>EconomicTimes</Label>
                                <BodyText style={styles.pubTime}>Today, 10:24 AM</BodyText>
                            </View>

                        </View>
                        <View style={styles.pubContainerIcon}>
                            <TouchableCustom
                                onPress={() => setisFavorite(!isFavorite)}
                            >
                                <HeartIcon
                                    fill={isFavorite ? COLORS.RED : COLORS.WHITE}
                                    width={hp(2.36)}
                                    height={hp(2.36)}
                                />
                            </TouchableCustom>


                            <TouchableCustom
                                style={styles.icon}
                                onPress={() => handleShare(selectedNews.title)}
                            >
                                <ShareIcon
                                    fill={COLORS.WHITE}
                                    width={hp(2.36)}
                                    height={hp(2.36)}
                                />
                            </TouchableCustom>
                        </View>
                    </View>


                    {/* DESCRIPTION */}
                    <BodyText style={styles.desc}>{desc}{desc}{desc}</BodyText>

                </Layout>
            </ImageBackground>
        </ImageBackground>
    )
}

export default NewsDetailScreen

const styles = StyleSheet.create({})