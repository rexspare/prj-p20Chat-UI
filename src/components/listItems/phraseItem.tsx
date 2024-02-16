import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, normalize } from '../../assets/stylesGuide'
import { BodyText } from '..'

interface phraseItemProps {
    item: any,
    index: number
}

const PhraseItem: React.FC<phraseItemProps> = (props) => {
    const { item, index } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.main]}
        >
            <BodyText style={styles.txt}>{`${index + 1}. ${item.text}`}</BodyText>
        </TouchableOpacity>
    )
}

export default PhraseItem

const styles = StyleSheet.create({
    main: {
        width: '44%',
        backgroundColor: COLORS.DISABLED,
        ...COMMON_STYLES.center_,
        paddingVertical: normalize(7),
        marginVertical: normalize(7),
        borderRadius: normalize(7)
    },
    txt: {
        color: COLORS.WHITE,
        marginVertical: 0,
        fontSize: normalize(12)
    }
})