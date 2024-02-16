import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
    LineChart
} from "react-native-chart-kit"
import { StockUp } from '../../assets/icons'
import { COLORS, hp, normalize, wp } from '../../assets/stylesGuide'
import { BodyText, Label, Layout, PrimaryButton, PrimaryHeader, TimeBreakPointItem } from '../../components'
import { styles } from './styles'
import useAppConfig from '../../hooks/AppConfig'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const timeBreaksPoints = [
    {
        id: 1,
        name: '1H'
    },
    {
        id: 2,
        name: '1D'
    },
    {
        id: 3,
        name: '1W'
    },
    {
        id: 4,
        name: '1M'
    },
    {
        id: 5,
        name: '1Y'
    },
    {
        id: 6,
        name: '3Y'
    },
]


const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [5, 35, 25, 55, 45, 75, 65, 35, 55, 45, 75, 65, 97, 35, 55, 45, 75, 65, 97],
            color: (opacity = 1) => COLORS.PRIMARY,
            strokeWidth: 3 // optional
        }
    ],
};


const chartConfig = {
    backgroundGradientFrom: COLORS.BACKGROUND,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: COLORS.BACKGROUND,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(49, 160, 138, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional,
};

const TokenDetailScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [selectedTime, setselectedTime] = useState<any>(timeBreaksPoints[3])

    return (
        <Layout fixed={true}>
            <PrimaryHeader
                rightIcon={true}
            />

            <BodyText style={styles.tokenName}>Etherium</BodyText>
            <Label style={styles.tokenAmmout}>$1234.45</Label>
            <View style={styles.row}>
                <StockUp />
                <BodyText style={styles.tokenStatus}>$21.56 (+0.64%) <BodyText style={{ fontSize: normalize(10) }}>Today</BodyText></BodyText>
            </View>

            <View>
                <LineChart
                    data={data}
                    width={wp(105)}
                    height={hp(30)}
                    chartConfig={chartConfig}
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    style={styles.chart}
                />

                <View style={styles.chipsContainer}>
                    {
                        timeBreaksPoints.map((item, index) => (
                            <TimeBreakPointItem
                                key={index}
                                item={item}
                                selected={selectedTime}
                                onPress={setselectedTime}
                            />
                        ))
                    }

                </View>
            </View>


            <View style={styles.balanceCOntainer}>
                <View>
                    <BodyText style={styles.balanceTxt}>{lang['_81']}</BodyText>
                    <BodyText style={styles.balanceAmmout}>0.00000053 ETH</BodyText>
                </View>

                <Label>$23.53</Label>

            </View>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <PrimaryButton
                    title={lang['_82']}
                    style={styles.btnStyle}
                    onPress={() => navigation.navigate(SCREENS.RECIEVE)}

                />
                <PrimaryButton
                    title={lang['_83']}
                    filled={true}
                    style={styles.btnStyle}
                    onPress={() => navigation.navigate(SCREENS.SEND)}
                />

            </View>


        </Layout>
    )
}

export default TokenDetailScreen
