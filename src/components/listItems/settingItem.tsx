import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COMMON_STYLES, FONTS, hp, normalize } from '../../assets/stylesGuide';
import { BodyText, If, Label } from '..';
import { ChevRightIcon } from '../../assets/icons';

interface settingItemProps {
    title: string;
    subtitle?: string;
    onPress?: Function;
}

const SettingItem: React.FC<settingItemProps> = (props) => {
    const { title, subtitle, onPress = () => { } } = props

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress()}
            style={styles.main}>
            <View style={styles.container}>
                <Label style={styles.title}>{title}</Label>
                <If condition={subtitle != undefined}>
                    <BodyText style={styles.subtitle}>{subtitle}</BodyText>
                </If>
            </View>

            <ChevRightIcon
                width={normalize(8)}
                height={normalize(11.5)}

            />
        </TouchableOpacity>
    )
}

export default SettingItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginVertical: hp(2)
    },
    container: {
        width: '82%',
    },
    title: {
        textAlign: 'left',
        marginVertical: 0,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: normalize(14.5)
    },
    subtitle: {
        textAlign: 'left',
        marginVertical: 0,
        marginTop: normalize(5),
        fontSize: normalize(10)
    }
})