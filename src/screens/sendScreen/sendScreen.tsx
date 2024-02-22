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
import { RightChev, ScanQRIcon } from '../../assets/icons'
import { SCREENS } from '../../assets/constants'

const SendScreen = () => {
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
          title={lang['_78']}
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
                <TouchableCustom
                  style={styles.dropContainer}
                  onPress={() => setisAssetselected(false)}
                >
                  <View style={styles.row}>
                    <Image
                      source={selectedAsset.icon}
                      style={styles.icon}
                    />
                    <BodyText style={styles.txt}>{selectedAsset?.shortName}</BodyText>
                  </View>

                  <RightChev
                    fill={theme.BLACK_TO_WHITE}
                    width={hp(1.2)}
                    height={hp(1.2)}
                  />
                </TouchableCustom>


                {/* ADDRESS INPUT */}
                <View style={styles.row}>
                  <PrimaryInput
                    title={lang['_97']}
                    value={address}
                    onChange={(txt) => setaddress(txt)}
                    containerStyles={styles.addressInputContainer}
                  />
                  <TouchableCustom
                    style={styles.scanIcon}
                  >
                    <ScanQRIcon
                      fill={theme.BLACK_TO_WHITE}
                      width={hp(2.57)}
                      height={hp(2.57)}
                    />
                  </TouchableCustom>
                </View>

                <PrimaryInput
                  title={lang['_98']}
                  value={network}
                  onChange={(txt) => setnetwork(txt)}
                  containerStyles={styles.netInputContainer}
                />

                <PrimaryInput
                  title={lang['_99']}
                  value={amount}
                  onChange={(txt) => setamount(txt)}
                  containerStyles={styles.netInputContainer}
                />

                <BodyText style={styles.txt1}>{lang["_100"]} <BodyText style={styles.txt2}>{`0.585473 ${selectedAsset.shortName}`}</BodyText></BodyText>

                <View style={styles.row1}>
                  <BodyText style={styles.txt3}>{lang['_101']}</BodyText>
                  <BodyText style={styles.txt3}>{`0.03432234 ${selectedAsset?.shortName}($100.00)`}</BodyText>
                </View>

                <View style={styles.row1}>
                  <BodyText style={styles.txt3}>{lang['_102']}</BodyText>
                  <BodyText style={styles.txt3}>{`$3.45`}</BodyText>
                </View>

                <View style={styles.row1}>
                  <BodyText style={styles.txt3}>{lang['_103']}</BodyText>
                  <BodyText style={styles.txt4}>{`$103.45`}</BodyText>
                </View>

                <Spacer height={hp(10)} />



              </Layout>
          }

          <If condition={isAssetselected}>
            <View style={styles.btnContainer}>
              <PrimaryButton
                title={lang['_104']}
                onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}
              />
            </View>
          </If>

        </Layout>



      </Layout>
    </>
  )
}

export default SendScreen
