import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { AnimatedCheckBox, BodyText, Label, Layout, PrimaryButton } from '../../components'
import { IMAGES } from '../../assets/images'
import { styles as styles_ } from './styles'
import useAppConfig from '../../hooks/AppConfig'

const LandingScreen = () => {
  const { lang, theme } = useAppConfig()
  const styles = styles_(theme)

  const [checked, setchecked] = useState(false)

  return (
    <Layout fixed={true}>

      {/* BRANDING */}
      <Image
        source={IMAGES.LANDING_ICON}
        style={styles.img}
      />

      <Label style={styles.txt}>{lang["_01"]}</Label>

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
          onPress={() => { }}
        />

      </View>

    </Layout>
  )
}

export default LandingScreen
