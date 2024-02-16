import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, normalize } from '../../assets/stylesGuide'
import { BodyText } from '..'

interface timeBreakPointItem {
    item: any;
    selected: any;
    onPress: Function
}

const TimeBreakPointItem: React.FC<timeBreakPointItem> = (props) => {
    const { item, selected, onPress } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.main, {
                backgroundColor: selected.id == item.id ?
                    COLORS.PRIMARY : COLORS.WHITE
            }]}
            onPress={() => onPress(item)}
            >
            <BodyText style={{
                ...styles.txt,
                color: selected.id == item.id ?
                    COLORS.WHITE : COLORS.TEXT
            }}>{item.name}</BodyText>
        </TouchableOpacity>
    )
}

export default TimeBreakPointItem

const styles = StyleSheet.create({
    main: {
        borderRadius: 20,
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    txt: {
        fontSize: normalize(9),
        marginVertical: 0,
        color: COLORS.WHITE
    }
})