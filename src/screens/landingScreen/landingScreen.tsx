import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { AnimatedCheckBox, BgLayout, BodyText, Label, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles as styles_ } from './styles'

const LandingScreen = () => {
  const { lang, theme } = useAppConfig()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [checked, setchecked] = useState(false)

  return (
    <BgLayout fixed={true}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LANDING_ICON}
        style={styles.img}
      />

      <Label style={styles.txt}>{lang["_208"]}</Label>
      <BodyText style={styles.txt3}>{lang['_209']}</BodyText>


      <View style={styles.btnContainer}>

        <View style={styles.row}>
          <AnimatedCheckBox
            checked={checked}
            onPress={() => setchecked(!checked)}
            containerStyle={styles.checkBox}
          />

          <BodyText style={styles.txt1}>{lang['_02']}
            <BodyText style={styles.txt2}> {lang['_03']}</BodyText>
            <BodyText style={styles.txt1}>. {lang['_04']}</BodyText>
            <BodyText style={styles.txt2}> {lang['_05']} </BodyText>
          </BodyText>

        </View>

        <PrimaryButton
          title={lang['_06']}
          onPress={() => navigation.navigate(SCREENS.PHONE)}
        />

      </View>

    </BgLayout>
  )
}

export default LandingScreen
