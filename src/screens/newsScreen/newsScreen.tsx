import React, { useState, useRef, useEffect } from 'react'
import { AppHeader, BodyText, If, Label, Layout, Loader, NewsCardItem, NewsFeedItem, NewsItem, PrimaryInput } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel-v4';
import { COLORS, hp, wp } from '../../assets/stylesGuide';
import { View } from 'react-native';
import { FEEDS, NEWS } from '../../data';
import { newsStateSelectors, useNews } from '../../states/news';
import useNewsApi from '../../hooks/News';
import { FlashList } from '@shopify/flash-list';

const NewsScreen = () => {
    const { lang, theme } = useAppConfig()
    const news = useNews(newsStateSelectors.news)
    const { isLoading, getNewsCategory, getNews } = useNewsApi()

    const styles = styles_(theme)
    const carouselRef = useRef(null)
    const [searchVal, setsearchVal] = useState("")
    const [activeIndex, setactiveIndex] = useState(0)

    // GET NEWS
    useEffect(() => {
        getNews()
    }, [])


    return (
        <Layout fixed={true} containerStyle={styles.layout}>
            <AppHeader
                hideBackBtn={true}
                iconColor={theme.BLACK_TO_WHITE}
                title={lang['_61']}
            />

            <Layout
                containerStyle={styles.layout}
                contentContainerStyle={styles.main}>
                <PrimaryInput
                    placeholder={lang['_62']}
                    value={searchVal}
                    onChange={(txt) => setsearchVal(txt)}
                    hideTitle={true}
                    inputStyles={styles.input}
                    inputContainer={styles.inputContainer}
                    containerStyles={styles.layout}
                />

                <Label style={styles.txt1}>{lang['_63']}</Label>

                <BodyText style={styles.txt2}>{lang['_64']}</BodyText>

                {/* SLIDER CAROUSEL */}
                <View style={styles.carouselConatianer}>
                    <Carousel
                        ref={carouselRef}
                        layoutCardOffset={hp(3.1)}
                        data={news}
                        layout={'default'}
                        renderItem={({ item }: any) => <NewsCardItem data={item} />}
                        sliderWidth={wp(90)}
                        itemWidth={hp(34.1)}
                        loop
                        onSnapToItem={(item) => setactiveIndex(item)}
                    />
                    <Pagination
                        activeDotIndex={activeIndex}
                        dotsLength={NEWS?.length}
                        containerStyle={styles.pagination}
                        renderDots={(activeIdx, length, context) => (
                            <View style={styles.dotContainerStyle}>
                                {
                                    ([...new Array(length).keys()]).map((item, index) => (
                                        <View
                                            key={index}
                                            style={activeIdx == index ? styles.activeDotStyle : styles.inactiveDotStyle}></View>
                                    ))
                                }
                            </View>
                        )}
                    />
                </View>
                {/* SLIDER CAROUSEL */}

                <View style={styles.row}>
                    <BodyText style={styles.txt3}>{lang['_65']}</BodyText>
                    <BodyText style={styles.txt4}>{lang['_66']}</BodyText>
                </View>

                {/* NEWS LIST */}

                <FlashList
                    data={news}
                    renderItem={({ item, index }) => (
                        <NewsItem
                            key={index}
                            item={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={hp(6)}
                />

                {/* SOCIAL LIST */}

                <View style={styles.itemContainer}>
                    <FlashList
                        data={news}
                        renderItem={({ item, index }) => (
                            <View key={index}>
                                <NewsFeedItem
                                    item={item}
                                />
                                <If condition={index < FEEDS.length - 1}>
                                    <View style={styles.line}></View>
                                </If>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                        estimatedItemSize={hp(6)}
                    />
                </View>

            </Layout>
            <Loader
                isLoading={isLoading}
            />
        </Layout>
    )
}

export default NewsScreen