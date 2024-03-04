import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import useAppConfig from '../../hooks/AppConfig'
import { COLORS, FONT_SIZE, hp } from '../../assets/stylesGuide'
import { IMAGES } from '../../assets/images'
import { Label, TouchableCustom } from '..'
import { useNavigation } from '@react-navigation/native'
import { newsStateSelectors, useNews } from '../../states/news'
import { SCREENS } from '../../assets/constants'

interface newsCardItemProps {
    data: any
}

const NewsCardItem: FC<newsCardItemProps> = (props) => {
    const {
        data
    } = props
    const navigation = useNavigation()
    const setselectedNews = useNews(newsStateSelectors.setselectedNews)

    const handleSelect = () => {
        setselectedNews(data)
        navigation.navigate(SCREENS.NEWS_DETAIL)
    }

    return (
        <TouchableOpacity
            onPress={() => handleSelect()}
        >
            <ImageBackground
                source={data.cover}
                style={styles.main}
                imageStyle={styles.img}
            >
                <ImageBackground
                    source={IMAGES.IMAGE_SHADOW}
                    style={styles.main}
                    imageStyle={styles.img}
                >

                    <Label style={styles.txt}>{data.title}</Label>

                </ImageBackground>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default React.memo(NewsCardItem)

const styles = StyleSheet.create({
    main: {
        width: hp(34.1),
        height: hp(31.75),
        borderRadius: hp(3.1),
        overflow: 'hidden',
    },
    shadow: {
        width: '100%',
        height: '100%',
        borderRadius: hp(3.1),
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: hp(3.1),
    },
    txt: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._18,
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        flexShrink: 1,
        padding: hp(3)
    }
})