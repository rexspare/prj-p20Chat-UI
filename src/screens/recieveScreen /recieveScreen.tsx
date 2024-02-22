import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AppHeader, BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, If, Label, Layout, PrimaryButton, PrimaryInput, Spacer, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, Image, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { OrLine, RightChev, ScanQRIcon } from '../../assets/icons'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'

const RecieveScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const setselectedAsset = useWallet(walletStateSelectors.setselectedAsset)
  const selectedAsset = useWallet(walletStateSelectors.selectedAsset)

  const [filteredDataSource, setfilteredDataSource] = useState(COINSLIST)
  const [isAssetselected, setisAssetselected] = useState(false)
  const [address, setaddress] = useState("")
  const [network, setnetwork] = useState("")
  const [amount, setamount] = useState("")

  const handleFilter = (txt: string) => {
    if (txt != '') {
      const filtered = COINSLIST.filter((coin) => (
        coin?.name?.toString()?.toUpperCase().includes(txt?.toString()?.toUpperCase()) ||
        coin?.shortName?.toString()?.toUpperCase().includes(txt?.toString()?.toUpperCase())
      ))
      setfilteredDataSource(filtered)
    } else {
      setfilteredDataSource(COINSLIST)
    }
  }

  const handleSelect = (val: any) => {
    setselectedAsset(val)
    setisAssetselected(true)
  }


  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <AppHeader
          title={isAssetselected ? `${lang['_116']} ${selectedAsset.shortName}` : lang['_115']}
          showRightIcon={isAssetselected == false}
          onChangeInput={handleFilter}
          onBackPress={isAssetselected ? () => setisAssetselected(false) : null}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>

          {
            !isAssetselected ?
              <FlatList
                data={filteredDataSource}
                renderItem={({ item, index }) => (
                  <CoinItem
                    item={item}
                    onPress={() => handleSelect(item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
              />
              :
              <Layout>

                <Image
                  source={selectedAsset.icon}
                  style={styles.icon}
                />

                <BodyText style={styles.txt1}>{lang['_117']}</BodyText>

                <Image
                  source={IMAGES.QR}
                  style={styles.qr}
                />

                <View style={styles.row}>

                </View>

                <Spacer height={hp(20)} />
              </Layout>
          }

          <If condition={isAssetselected}>
            <View style={styles.btnContainer}>
              <PrimaryButton
                title={lang['_120']}
                onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}
                style={styles.btn}
                textStyle={styles.btnTxt}
              />
              <PrimaryButton
                title={lang['_121']}
                onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}

              />
            </View>
          </If>

        </Layout>



      </Layout>
    </>
  )
}

export default RecieveScreen
