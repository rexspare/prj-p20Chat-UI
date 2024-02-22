import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AppHeader, BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, If, Label, Layout, PrimaryButton, PrimaryInput, Spacer, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, Image, ImageBackground, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { RightChev, ScanQRIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { SCREENS } from '../../assets/constants'



const SendSummaryScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const selectedAsset = useWallet(walletStateSelectors.selectedAsset)

  const dottedLineDots = Array.from({ length: 100 }, (_, index) => (
    <View key={index} style={styles.dottedLineDot}></View>
  ));


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
          <Layout>

            <Image
              source={selectedAsset.icon}
              style={styles.icon}
            />

            <Label style={styles.txt}>{`-0.03432234 ${selectedAsset.shortName}`}</Label>

            <BodyText style={styles.txt1}>=$100.00</BodyText>


            {/* TICKET VIEW */}
            <View style={styles.ticket}>

              <View style={styles.row1}>
                <BodyText style={styles.txt3}>{lang['_105']}</BodyText>
                <BodyText style={styles.txt3}>{`${selectedAsset?.name} (${selectedAsset?.shortName})`}</BodyText>
              </View>

              <View style={styles.row2}>
                <BodyText style={styles.txt3}>{lang['_106']}</BodyText>
                <BodyText style={styles.txt3}>{`Main Wallet 1(r43u8....4f9j4fj)`}</BodyText>
              </View>

              <View style={styles.row2}>
                <BodyText style={styles.txt3}>{lang['_107']}</BodyText>
                <BodyText style={styles.txt3}>{`48uc8c5u...5ce9jej4`}</BodyText>
              </View>

              {/* LINE AND BULGE */}

              <View style={styles.bulgeContainer}>
                <View style={styles.bulge1}></View>
                <View style={styles.dottedLineContainer}>{dottedLineDots}</View>
                <View style={styles.bulge2}></View>
              </View>

              <View style={styles.row2}>
                <BodyText style={styles.txt3}>{lang['_108']}</BodyText>
                <BodyText style={styles.txt3}>{`0.0000134 ${selectedAsset.shortName}($3.45)`}</BodyText>
              </View>

              <View style={styles.row2}>
                <BodyText style={styles.txt3}>{lang['_109']}</BodyText>
                <BodyText style={styles.txt4}>{`$103.45`}</BodyText>
              </View>

            </View>

          </Layout>

          <View style={styles.btnContainer}>
            <PrimaryButton
              title={lang['_110']}
              onPress={() => navigation.navigate(SCREENS.SEND_SUCCESS)}
            />
          </View>

        </Layout>

      </Layout>
    </>
  )
}

export default SendSummaryScreen
