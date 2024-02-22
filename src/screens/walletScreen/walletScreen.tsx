import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, Label, Layout, PrimaryButton, TouchableCustom, WalletHeader } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, Image, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { OutgoingIcon, QrIcon, SendIcon } from '../../assets/icons'
import GenerateAddresButton from '../../components/generateAddresButton'
import { SCREENS } from '../../assets/constants'

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
            title={lang['_72']}
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

          <FlatList
            data={COINSLIST}
            ListHeaderComponent={() => (
              <>
                <BodyText style={styles.txt3}>{lang['_74']}</BodyText>

                {/* QUICK SEND LIST */}
                <View>
                  <FlatList
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
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                  />

                </View>

                <BodyText style={styles.txt3}>{lang['_75']}</BodyText>
              </>
            )}
            renderItem={({ item, index }) => (<CoinItem item={item} />)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />

        </Layout>


      </Layout>
    </>
  )
}

export default WalletScreen
