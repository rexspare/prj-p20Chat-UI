import { useNavigation, CommonActions } from '@react-navigation/native'
import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { AppHeader, BodyText, Label, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { styles as styles_ } from './styles'
import { SCREENS } from '../../assets/constants'



const SendSuccessScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const selectedAsset = useWallet(walletStateSelectors.selectedAsset)

  const handleBack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: SCREENS.HOME,
            state: {
              routes: [
                {
                  name: SCREENS.WALLET
                }
              ]
            }
          }
        ],
      })
    );
  }


  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <AppHeader
          title={lang['_78']}
          showRightIcon={false}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>

          <Image
            source={selectedAsset.icon}
            style={styles.icon}
          />

          <Label style={styles.txt}>{lang['_111']}</Label>


          <View style={styles.row1}>
            <BodyText style={styles.txt3}>{lang['_112']}</BodyText>
            <BodyText style={styles.txt4}>{`0.03432234 ${selectedAsset.shortName}`}</BodyText>
          </View>


          <View style={styles.row2}>
            <BodyText style={styles.txt3}>{lang['_113']}</BodyText>
            <BodyText style={styles.txt4}>{`48uc8c5u...5ce9jej4`}</BodyText>
          </View>

        </Layout>

        <View style={styles.btnContainer}>
          <PrimaryButton
            title={lang['_114']}
            onPress={() => handleBack()}
            style={styles.btn}
            textStyle={styles.btnTxt}
          />
        </View>

      </Layout>
    </>
  )
}

export default SendSuccessScreen
