import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS, hp, normalize } from '../../assets/stylesGuide'
import { BodyText } from '..'

interface bulletItemProps {
    item: any
}

const BulletItem: React.FC<bulletItemProps> = (props) => {
    const { item } = props
    return (
        <View style={styles.main}>
            <View style={styles.dotContainer}>
                <Entypo
                    name='dot-single'
                    color={COLORS.TEXT}
                    size={normalize(14)}
                />
            </View>

            <BodyText style={{
                ...styles.txt,
                color: item.button ? COLORS.SECONDARY : COLORS.TEXT
            }}>{item.text}</BodyText>
        </View>
    )
}

export default BulletItem

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    dotContainer: {
        top: hp(0.5) + normalize(5),
        justifyContent: 'center',
    },
    txt: {
        textAlign: 'left',
        flex: 1,
        marginVertical: hp(1)

    }
})