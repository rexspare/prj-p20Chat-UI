import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, hp, COMMON_STYLES } from '../assets/stylesGuide'
import { NewMsgIcon } from '../assets/icons'

interface fabButtonProps {
    onPress: Function;
}

const FabButton: FC<fabButtonProps> = (props) => {
    const {
        onPress = () => { }
    } = props

    return (
        <View style={styles.main}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.pressable}
                onPressIn={() => onPress()}
            >
                <NewMsgIcon width={hp(2.9)} height={hp(2.9)} />
            </TouchableOpacity>
        </View>
    )
}

export default FabButton

const styles = StyleSheet.create({
    main: {
        width: hp(6.9),
        height: hp(6.9),
        borderRadius: hp(6.9),
        backgroundColor: COLORS.SECONDARY,
        ...COMMON_STYLES.center_,
        position: 'absolute',
        bottom: hp(4),
        right: hp(3)
    },
    pressable: {
        width: hp(6.5),
        height: hp(6.5),
        ...COMMON_STYLES.center_,
    }
})