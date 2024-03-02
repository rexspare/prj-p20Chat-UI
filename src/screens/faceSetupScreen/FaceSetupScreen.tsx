import React, { useState } from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { CameraIcon, ScanWithBar, ScanWithBarWhite } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { hp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, If, Label, Layout, PrimaryButton, TextButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const FaceSetupScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const rnBiometrics = new ReactNativeBiometrics()

  const styles = styles_(theme)


  const handleBiometric = async () => {
    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable()

      if (available && biometryType === BiometryTypes.FaceID) {
        proceedBiometric()
      } else if (available && biometryType === BiometryTypes.TouchID) {
        proceedBiometric()
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        proceedBiometric()
      } else {
        console.log('Biometrics not supported')
        return
      }


    } catch (error) {

    }
  }

  const proceedBiometric = () => {
    let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
    let payload = epochTimeSeconds + 'some message'

    rnBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: payload
    })
      .then((resultObject) => {
        const { success, signature } = resultObject
        if (success) {
          console.log(signature)
        }
      })
  }

  return (
    <Layout fixed={true}>

      <CommonHeader />

      <Label style={styles.txt}>{lang["_210"]}</Label>

      <BodyText style={styles.txt1}>{lang['_211']}</BodyText>


      <View style={styles.scanContainer}>
        {
          theme.mode == 'light' ?
            <ScanWithBar
              width={hp(26)}
              height={hp(26)}
            />
            :
            <ScanWithBarWhite
              width={hp(26)}
              height={hp(26)}
            />
        }
      </View>

      <If condition={keyboardStatus == false}>
        <View style={styles.btnContainer}>

          <PrimaryButton
            title={lang['_212']}
            onPress={() => navigation.navigate(SCREENS.BIOMETRIC)}
          />

          <TextButton
            title={lang['_213']}
            onPress={() => navigation.navigate(SCREENS.APP)}
            style={styles.txtBtn}
            textStyle={styles.btnTxt}
          />

        </View>
      </If>

    </Layout>
  )
}

export default FaceSetupScreen
