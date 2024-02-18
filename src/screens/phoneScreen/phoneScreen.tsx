import React, { useState, useRef } from 'react'
import { Image, View } from 'react-native'
import { IMAGES } from '../../assets/images'
import { BodyText, CommonHeader, If, Label, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'
import PhoneInput from "react-native-phone-number-input";
import useKeyboard from '../../hooks/Keyboard'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const PhoneScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()
  const styles = styles_(theme)

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <Layout fixed={true}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LOGO_OPACITY_BG}
        style={styles.img}
      />


      <CommonHeader />

      <Label style={styles.txt}>{lang["_07"]}</Label>

      <BodyText style={styles.txt1}>{lang['_08']}</BodyText>

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="second"
        placeholder={lang['_09']}
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme={theme.mode == 'dark'}
        // autoFocus
        disableArrowIcon
        textInputProps={{
          placeholderTextColor: theme.TAB_ICON
        }}
        containerStyle={styles.containerStyle}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
        countryPickerButtonStyle={styles.countryPickerButtonStyle}
      />

      <If condition={keyboardStatus == false}>
        <View style={styles.btnContainer}>

          <PrimaryButton
            title={lang['_10']}
            onPress={() => navigation.navigate(SCREENS.OTP)}
          />

        </View>
      </If>

    </Layout>
  )
}

export default PhoneScreen
