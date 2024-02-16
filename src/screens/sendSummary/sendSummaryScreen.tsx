import React, { useEffect } from 'react'
import { View } from 'react-native'
import { COLORS } from '../../assets/stylesGuide'
import { BodyText, Label, Layout, PrimaryHeader } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'


const SendSummaryScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(SCREENS.SUCCESS)
        }, 2000);
    }, [])



    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_89']}
            />
            <Layout containerStyle={{ paddingHorizontal: '5%' }}>

                <Label style={styles.heading}>SENDING PVT-USD....</Label>

                {/* SUMMARY */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summary}>
                        <Label style={styles.summaryHeading}>{lang['_96']}</Label>
                        <View style={styles.summaryVal}>
                            <BodyText style={styles.summaryTxt}>0.00042</BodyText>
                            <BodyText style={{ ...styles.summaryTxt, color: COLORS.TEXT }}>0.00042 PVT-USD</BodyText>
                            <BodyText style={styles.summaryTxt}>{`${lang['_100']} 0.00042 PVT-USD`}</BodyText>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.summary}>
                        <Label style={styles.summaryHeading}>{lang['_101']}</Label>
                        <View style={styles.summaryVal}>
                            <BodyText style={styles.summaryTxt}>0.00042</BodyText>
                            <BodyText style={{ ...styles.summaryTxt, color: COLORS.TEXT }}>0.00042 PVT-USD</BodyText>
                            <BodyText style={styles.summaryTxt}>{`${lang['_100']} 0.00042 PVT-USD`}</BodyText>
                        </View>
                    </View>

                </View>
            </Layout>


        </Layout>
    )
}

export default SendSummaryScreen
