import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import React, { useState } from 'react'
import { Image, StatusBar, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { OutgoingIcon, QrIcon, SendIcon } from '../../assets/icons'
import { hp } from '../../assets/stylesGuide'
import { BodyText, CoinItem, Label, Layout, PrimaryButton, Spacer, TouchableCustom, WalletHeader } from '../../components'
import GenerateAddresButton from '../../components/generateAddresButton'
import { CHATS_LIST, COINSLIST } from '../../data'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'

const WalletScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()
  const USERS = [...CHATS_LIST]

  const styles = styles_(theme)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)
  const [address, setaddress] = useState("")

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <WalletHeader />

        <BodyText style={styles.txt}>{lang['_70']}</BodyText>

        <Label style={styles.txt1}>$ 278,374.54</Label>

        <View style={styles.row}>
          <OutgoingIcon />
          <BodyText style={styles.txt2}>$23.43(+1.34%)</BodyText>
        </View>

        <GenerateAddresButton
          address={address}
          onPress={() => setaddress("3x17349213142131s")}
        />

        <View style={styles.btnContainer}>
          <PrimaryButton
            title={lang['_72']}
            onPress={() => navigation.navigate(SCREENS.SEND)}
            style={styles.btn}
            textStyle={styles.btntxt}
            icon={<SendIcon width={hp(2.57)} height={hp(2.57)} />}
          />

          <PrimaryButton
            title={lang['_73']}
            onPress={() => navigation.navigate(SCREENS.RECIEVE)}
            style={styles.btn}
            textStyle={styles.btntxt}
            icon={<QrIcon width={hp(2.57)} height={hp(2.57)} />}
          />
        </View>


        {/* CONTEXT LISTS */}
        <Layout
          fixed={true}
          containerStyle={styles.container}>

          <FlashList
            data={COINSLIST}
            ListHeaderComponent={() => (
              <>
                <BodyText style={styles.txt3}>{lang['_74']}</BodyText>

                {/* QUICK SEND LIST */}
                <View>
                  <FlashList
                    data={USERS}
                    horizontal
                    renderItem={({ item, index }) => (
                      <TouchableCustom style={styles.userItem}>
                        <Image
                          source={item.avatar}
                          style={styles.avatar}
                        />
                        <BodyText style={styles.itemTxt}>{item.name}</BodyText>
                      </TouchableCustom>
                    )}
                    estimatedItemSize={hp(10)}
                    showsHorizontalScrollIndicator={false}
                    // contentContainerStyle={styles.contentContainerStyle}
                    ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
                  />

                </View>

                <BodyText style={styles.txt3}>{lang['_75']}</BodyText>
              </>
            )}
            renderItem={({ item, index }) => (<CoinItem item={item} />)}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={hp(10)}
          // contentContainerStyle={styles.contentContainerStyle}
          />

        </Layout>


      </Layout>
    </>
  )
}

export default WalletScreen
