import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { hp, wp } from '../../assets/stylesGuide'
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils'
import { If, Label } from '..';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from '../../assets/icons';
import useAppConfig from '../../hooks/AppConfig';

interface commonHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
}

const CommonHeader: FC<commonHeaderProps> = (props) => {
    const { hideBackBtn = false, title } = props
    const navigation = useNavigation()
    const { theme } = useAppConfig()

    return (
        <View style={styles.main}>

            <If condition={hideBackBtn == false}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon
                        fill={theme.BLACK_TO_WHITE}
                        width={hp(2.4)}
                        height={hp(2)}
                    />
                </TouchableOpacity>
            </If>





        </View >
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : 0,
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
        position: 'absolute'
    }
})