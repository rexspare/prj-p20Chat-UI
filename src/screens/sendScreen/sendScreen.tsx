import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AppHeader, BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, Label, Layout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, StatusBar, View } from 'react-native'
import { COLORS } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { useWallet, walletStateSelectors } from '../../states/wallet'

const SendScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const setselectedAsset = useWallet(walletStateSelectors.setselectedAsset)

  const [filteredDataSource, setfilteredDataSource] = useState(COINSLIST)
  const [isAssetselected, setisAssetselected] = useState(false)

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

  console.log('===============jj=====================');
  console.log(isAssetselected == false);
  console.log('====================================');

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
              <></>
          }

        </Layout>



      </Layout>
    </>
  )
}

export default SendScreen
