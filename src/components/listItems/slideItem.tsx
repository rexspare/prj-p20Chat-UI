import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, wp, hp } from '../../assets/stylesGuide'
import { Label } from '..'

interface slideItemProps {
    item: any
}

const SlideItem: React.FC<slideItemProps> = (props) => {
    return (
        <View
            style={styles.main}>
            <Label>Screenshot</Label>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    main: {
        width: wp(92) - 10,
        backgroundColor: COLORS.DISABLED,
        ...COMMON_STYLES.center_,
        borderRadius: hp(3),
        marginHorizontal: 5
    }
})