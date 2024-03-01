import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'
import { SCREENS } from '../../assets/constants'
import { BgLayout, BodyText, CommonHeader, If, Label, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'

const OtpScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const [code, setCode] = useState('');

  return (
    <BgLayout fixed={true}>

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

    </BgLayout>
  )
}

export default OtpScreen
