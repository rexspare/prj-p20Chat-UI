import { ImageBackground, StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'
import { newsStateSelectors, useNews } from '../../states/news'
import { FEED_AVATARS, NEWS_IMAGES } from '../../assets/images/dummy'
import { AppHeader, BodyText, Label, Layout, TouchableCustom } from '../../components'
import { COLORS, SIZE, hp } from '../../assets/stylesGuide'
import { HeartIcon, ShareIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { formatDate, handleShare } from '../../utils/myUtils'
import RenderHtml from 'react-native-render-html';

const tags = [
    "Trendy",
    "Crypto",
]

const NewsDetailScreen = () => {
    const { lang, theme } = useAppConfig()
    const selectedNews = useNews(newsStateSelectors.selectedNews)
    const [isFavorite, setisFavorite] = useState(false)
    const styles = styles_(theme)

    const source = {
        html: selectedNews.content
    };

    return (
        <ImageBackground
            source={{ uri: selectedNews.image }}
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

                    <Label style={styles.txt}>{`${selectedNews.title}`}</Label>

                    {/* PUBLISHER */}
                    <View style={styles.publisher}>
                        <View style={styles.pubContainerName}>
                            <Image
                                source={IMAGES.AVATAR}
                                style={styles.pubImg}
                            />
                            <View >
                                <Label style={styles.pubName}>{selectedNews.author}</Label>
                                <BodyText style={styles.pubTime}>{formatDate(selectedNews.published_date)}</BodyText>
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
                    {/* <BodyText style={styles.desc}></BodyText> */}
                    <RenderHtml
                        contentWidth={SIZE.WIDTH * 0.9}
                        source={source}
                        baseStyle={{
                            color: COLORS.WHITE
                        }}
                    />

                </Layout>
            </ImageBackground>
        </ImageBackground>
    )
}

export default NewsDetailScreen

const styles = StyleSheet.create({})