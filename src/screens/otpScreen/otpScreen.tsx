import React, { useRef, useState } from 'react'
import { Image, View } from 'react-native'
import PhoneInput from "react-native-phone-number-input"
import { IMAGES } from '../../assets/images'
import { BodyText, CommonHeader, If, Label, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import OtpInputs from 'react-native-otp-inputs';
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const OtpScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const [code, setCode] = useState('');

  return (
    <Layout fixed={true}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LOGO_OPACITY_BG}
        style={styles.img}
      />


      <CommonHeader />

      <Label style={styles.txt}>{lang["_11"]}</Label>

      <BodyText style={styles.txt1}>{lang['_12']}</BodyText>

      <OtpInputs
        autofillFromClipboard={true}
        handleChange={code => setCode(code)}
        numberOfInputs={4}
        style={styles.otpMain}
        inputContainerStyles={styles.OTPField}
        inputStyles={styles.OTPtext}
        focusStyles={styles.OTPFieldHighlight}
      />

      <BodyText style={styles.txt2}>{lang['_13']} <BodyText style={styles.txt3}>01:34</BodyText></BodyText>

      <If condition={keyboardStatus == false}>
        <View style={styles.btnContainer}>

          <PrimaryButton
            title={lang['_14']}
            onPress={() => navigation.navigate(SCREENS.PROFILE_NAME)}
          />

        </View>
      </If>

    </Layout>
  )
}

export default OtpScreen
