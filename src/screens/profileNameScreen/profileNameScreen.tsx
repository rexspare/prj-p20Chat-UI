import React, { useRef, useState } from 'react'
import { Image, View } from 'react-native'
import PhoneInput from "react-native-phone-number-input"
import { IMAGES } from '../../assets/images'
import { BgLayout, BodyText, CommonHeader, If, Label, Layout, PrimaryButton, PrimaryInput } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import OtpInputs from 'react-native-otp-inputs';
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const ProfileNameScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [name, setname] = useState('')

  return (
    <BgLayout fixed={true}>

      <CommonHeader />

      <Label style={styles.txt}>{lang["_15"]}</Label>

      <BodyText style={styles.txt1}>{lang['_16']}</BodyText>

      <PrimaryInput
        title={lang['_17']}
        value={name}
        highlight={true}
        onChange={(txt) => setname(txt)}
        containerStyles={styles.inputContainer}
      />


      <BodyText style={styles.txt1}>{lang['_18']}</BodyText>

      <If condition={keyboardStatus == false}>
        <View style={styles.btnContainer}>

          <PrimaryButton
            title={lang['_19']}
            onPress={() => navigation.navigate(SCREENS.PROFILE_IMAGE)}
          />

        </View>
      </If>

    </BgLayout>
  )
}

export default ProfileNameScreen
