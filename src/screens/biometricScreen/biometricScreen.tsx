import MaskedView from '@react-native-masked-view/masked-view';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { styles } from './styles';
import { BlurView } from '@react-native-community/blur'
import { BodyText, CommonHeader, If } from '../../components';
import { COLORS, hp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ScanIcon, SuccessIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../assets/constants';

const BiometricScreen = () => {
    const navigation = useNavigation()
    const setCameraRef = useRef(null);
    const { lang } = useAppConfig()

    const [timer, settimer] = useState(10)

    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false, // set to true if possible
        }).start();
    }, [progressAnim]);

    useEffect(() => {

        let intervalId: any;

        if (timer < 100) {
            intervalId = setInterval(() => {
                settimer((prevTimer) => prevTimer + 10);
            }, 500);
        } else {
            clearInterval(intervalId);
            navigation.navigate(SCREENS.APP)
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timer])


    const interpolatedWidth = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    const percentage = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <RNCamera
            ref={setCameraRef}
            type={RNCamera.Constants.Type.front}
            style={styles.camera}
        >

            <CommonHeader
                iconColor={COLORS.WHITE}
            />

            {
                timer >= 100 ?
                    <>
                        <SuccessIcon
                            width={hp(21)}
                            height={hp(21.45)}
                            style={styles.icon2}
                        />

                        <BodyText style={styles.txt2}>{lang['_229']}</BodyText>
                    </>
                    :
                    <>
                        <BodyText style={styles.txt1}>{lang['_228']}</BodyText>

                        <ScanIcon
                            width={hp(34)}
                            height={hp(34)}
                            style={styles.icon}
                        />
                    </>
            }

            <View style={styles.absoluteContainer}>
                <BodyText style={styles.percentageText}>{timer > 100 ? 100 : timer} %</BodyText>
                <View style={styles.outer}>
                    <Animated.View style={[styles.progressBar, { width: interpolatedWidth }]} />
                </View>
                <BodyText style={styles.txt}>{lang['_227']}</BodyText>
            </View>

        </RNCamera>
    )
}

export default BiometricScreen
