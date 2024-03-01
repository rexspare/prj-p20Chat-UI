import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, hp, COMMON_STYLES } from '../assets/stylesGuide'
import { NewMsgIcon, TabMessage } from '../assets/icons'

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
                <TabMessage
                    fill={COLORS.WHITE}
                    width={hp(2.25)}
                    height={hp(2.25)} />
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
        right: hp(3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    pressable: {
        width: hp(6.5),
        height: hp(6.5),
        ...COMMON_STYLES.center_,
    }
})