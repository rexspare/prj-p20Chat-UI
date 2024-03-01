import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { BgLayout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'

const SplashScreen = () => {
  const { lang, theme } = useAppConfig()
  const navigation = useNavigation()

  const styles = styles_(theme)

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREENS.LANDING)
    }, 2000);
  }, [])



  return (
    <BgLayout fixed={true} bgStyle={styles.main}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LANDING_ICON}
        style={styles.img}
      />


    </BgLayout>
  )
}

export default SplashScreen
