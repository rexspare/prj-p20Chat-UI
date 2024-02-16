import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { FlatList, ImageBackground, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { EyeIcon, PopIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { COLORS, COMMON_STYLES, SIZE, hp } from '../../assets/stylesGuide'
import { AppHeader, BodyText, BulletItem, If, Label, Layout, PhraseItem, PrimaryButton, SlideItem, TextButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'

const InstallCompleteScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const ref = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZE.WIDTH);
        setCurrentSlideIndex(currentIndex);
    };

    const DATA_LIST = [
        {
            id: 1,
            text: lang['_36'],
        },
        {
            id: 2,
            text: lang['_37'],
        },
    ]


    return (
        <Layout fixed={true}>

            <Layout fixed={true} containerStyle={COMMON_STYLES.mainPad}>

                <View style={styles.center}>
                    <Label style={styles.heading}>{lang['_41']}</Label>
                    <BodyText style={{ paddingHorizontal: '8%' }}>{lang['_42']}</BodyText>


                    <View>
                        <FlatList
                            ref={ref}
                            onMomentumScrollEnd={updateCurrentSlideIndex}
                            contentContainerStyle={{ height: hp(28) }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={DATA_LIST}
                            pagingEnabled
                            style={{ marginTop: hp(3) }}
                            renderItem={({ item }) => <SlideItem item={item} />}
                        />
                    </View>

                    {/* Indicator container */}
                    <View
                        style={styles.dotContainer}>
                        {/* Render indicator */}
                        {DATA_LIST.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    currentSlideIndex == index && {
                                        backgroundColor: COLORS.TEXT,
                                        width: 8,
                                    },
                                ]}
                            />
                        ))}
                    </View>
                </View>


            </Layout>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <PrimaryButton
                    title={lang['_43']}
                    onPress={() => {
                        navigation.navigate(SCREENS.APP)
                    }}
                    filled={true}
                />
            </View>

        </Layout>
    )
}

export default InstallCompleteScreen
