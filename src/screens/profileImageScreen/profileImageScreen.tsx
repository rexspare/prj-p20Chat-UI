import React, { useState } from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { CameraIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { hp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, If, Label, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const ProfileImageScreen = () => {
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

      {/* BRANDING */}
      <Image
        source={IMAGES.LOGO_OPACITY_BG}
        style={styles.img}
      />


      <CommonHeader />

      <Label style={styles.txt}>{lang["_20"]}</Label>

      <ImageBackground
        source={image ? { uri: image } : IMAGES.AVATAR}
        style={styles.imgBg}
        imageStyle={styles.avatar}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => selectImage()}
        >
          <CameraIcon
            width={hp(5.3)}
            height={hp(5.3)}
          />
        </TouchableOpacity>
      </ImageBackground>


      <BodyText style={styles.txt1}>{lang['_21']}</BodyText>

      <If condition={keyboardStatus == false}>
        <View style={styles.btnContainer}>

          <PrimaryButton
            title={lang['_19']}
            onPress={() => navigation.navigate(SCREENS.APP)}
          />

        </View>
      </If>

    </Layout>
  )
}

export default ProfileImageScreen
