import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { BodyText, CommonHeader, If, Label, Layout, PrimaryButton, PrimaryInput } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'

const MessagesScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [name, setname] = useState('')

  return (
    <Layout fixed={true}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LOGO_OPACITY_BG}
        style={styles.img}
      />


      <CommonHeader />

      <Label style={styles.txt}>{lang["_15"]}</Label>

      <BodyText style={styles.txt1}>{lang['_16']}</BodyText>

   


    </Layout>
  )
}

export default MessagesScreen
