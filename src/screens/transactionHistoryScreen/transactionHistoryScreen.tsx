import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { FlatList, StatusBar } from 'react-native'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu'
import { AppHeader, BodyText, CoinItem, HistoryItem, Layout, TouchableCustom, WalletDropDown } from '../../components'
import { COINSLIST, HISTORY_LIST } from '../../data'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { VerticalDotsIcon } from '../../assets/icons'
import { hp } from '../../assets/stylesGuide'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { SCREENS } from '../../assets/constants'
import { PurgeHistoryModal } from '../../components/popups'

const TransactionHistoryScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()
  const menuRef = useRef<Menu>(null)

  const styles = styles_(theme)
  const walletList = useWallet(walletStateSelectors.walletList)
  const [isPurgeModalVisble, setisPurgeModalVisble] = useState(false)

  const MainMenuList: any[] = [
    {
      id: 1,
      name: lang["_69"],
      onPress: () => navigation.navigate(SCREENS.HISTORY_SETTING)
    },
    {
      id: 2,
      name: lang["_80"],
      onPress: () => setisPurgeModalVisble(true)
    },
  ]


  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <AppHeader
          title={lang['_79']}
          showRightIcon={true}
          renderRightIcon={
            <Menu ref={menuRef}>
              <MenuTrigger>
                <TouchableCustom
                  onPress={() => menuRef?.current?.open()}
                >
                  <VerticalDotsIcon height={hp(2.46)} />
                </TouchableCustom>
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={styles.optionsContainerStyle}
              >
                {
                  (MainMenuList).map((item, index) => (
                    <MenuOption
                      key={index}
                      onSelect={() => item?.onPress && item?.onPress()} >
                      <BodyText style={styles.menuTxt}>{item.name}</BodyText>
                    </MenuOption>
                  ))
                }
              </MenuOptions>
            </Menu>
          }
        />

        {/* CONTEXT */}

        <Layout
          fixed={true}
          containerStyle={styles.container}>

          <WalletDropDown
            data={walletList}
            containerStyles={styles.DpContainerStyles}
            selectedTextStyle={styles.DpSelectedTextStyle}
            tintColor={theme.PRIMARY_TO_WHITE}
          />

          <BodyText style={styles.txt3}>{lang['_81']}</BodyText>

          <FlatList
            data={HISTORY_LIST}
            renderItem={({ item, index }) => (
              <HistoryItem
                item={item}
                onPress={() => { }}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />

        </Layout>

        <PurgeHistoryModal
          isVisible={isPurgeModalVisble}
          onClose={() => setisPurgeModalVisble(false)}
        />

      </Layout>
    </>
  )
}

export default TransactionHistoryScreen
