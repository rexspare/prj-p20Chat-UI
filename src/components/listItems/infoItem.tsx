import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BodyText } from '..'
import { FONTS, hp, normalize } from '../../assets/stylesGuide'

interface infoItemProps {
    item: any
}

const InfoItem: React.FC<infoItemProps> = ({ item }) => {
    return (
        <View style={styles.main}>
            <View style={{ top: item?.id == 3 ? normalize(5) : 0 }}>
                {item?.icon}
            </View>
            <BodyText style={styles.txt}><BodyText style={{ ...styles.txt, fontFamily: FONTS.SEMI_BOLD }}>{item.never && item.never}</BodyText>{item.text}</BodyText>
        </View>
    )
}

export default InfoItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: hp(1)
    },
    txt: {
        marginLeft: 10,
        textAlign: 'left',
        marginVertical: 0
    }
})