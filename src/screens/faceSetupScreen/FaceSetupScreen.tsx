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

const FaceSetupScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [image, setimage] = useState("")

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setimage(res.path)
    })
      .catch((error) => {

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
            onPress={() => navigation.navigate(SCREENS.APP)}
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
