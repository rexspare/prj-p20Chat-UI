import React from 'react'
import { Text, View } from 'react-native'
import { AppHeader, BodyText, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { SuccessIcon } from '../../assets/icons'
import { styles } from './styles'
import { normalize } from '../../assets/stylesGuide'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const SuccessScreen = () => {
  const { lang } = useAppConfig()
  const navigation = useNavigation()

  const handleback = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: SCREENS.WALLET,
          },
        ],
      })
    );
  }

  return (
    <Layout fixed={true}>
      <AppHeader
        title={lang['_217']}
      />

      <Layout fixed={true} containerStyle={styles.container}>
        <View style={styles.iconContainer}>
          <SuccessIcon
            width={normalize(75)}
            height={normalize(75)}
          />
        </View>

        <BodyText style={styles.txt}>Asset</BodyText>
        <BodyText style={styles.txt}>{lang['_219']}</BodyText>

        <BodyText style={styles.txt1}>10.0000 PVT-USD</BodyText>

        <BodyText style={styles.txt2}>Ex07878812mx98adsai1259Xvq5</BodyText>

        <BodyText style={styles.txt3}>{lang["_220"]}</BodyText>

        <View style={styles.box}>
          <BodyText style={styles.txt4}>PVT-USD</BodyText>
          <BodyText style={styles.txt5}>12.57 PVT-USD</BodyText>
        </View>

        <View style={styles.absoluteConatiner}>
          <PrimaryButton
            title={lang['_218']}
            filled={true}
            onPress={() => handleback()}
          />
        </View>
      </Layout>

    </Layout>
  )
}

export default SuccessScreen
