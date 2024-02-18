import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide'
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils'
import { If, Label } from '..';
import { useNavigation } from '@react-navigation/native';
import { BackIcon, SearchIcon, VerticalDotsIcon } from '../../assets/icons';
import useAppConfig from '../../hooks/AppConfig';

interface homeHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
}

const HomeHeader: FC<homeHeaderProps> = (props) => {
    const { hideBackBtn = false, title } = props
    const navigation = useNavigation()
    const { theme } = useAppConfig()

    return (
        <View style={styles.main}>

            <Label style={styles.title}>{title}</Label>


            <View style={styles.leftRowContainer}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    style={styles.btnContainer}
                >
                    <SearchIcon width={hp(2.14)} height={hp(2.14)} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                >
                    <VerticalDotsIcon height={hp(2.46)} />
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : hp(1),
        marginBottom: hp(1.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    txtContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btnContainer: {
        marginHorizontal: hp(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._18
    },
    leftRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
})