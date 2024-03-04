import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { BodyText, ChatItem, CommonHeader, FabButton, HomeHeader, Label, Layout, Spacer } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { SCREENS } from '../../assets/constants'
import { FlashList } from '@shopify/flash-list'

const MessagesScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)
  const [blockModalVisible, setblockModalVisible] = useState(false)
  const [muteModalVisible, setmuteModalVisible] = useState(false)

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <HomeHeader
          title={lang['_28']}
          setblockModalVisible={setblockModalVisible}
          setmuteModalVisible={setmuteModalVisible}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          <FlashList
            data={filteredDataSource}
            renderItem={({ item, index }) => (<ChatItem item={item} />)}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={hp(10)}
            // contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
          />

        </Layout>

        <FabButton
          onPress={() => navigation.navigate(SCREENS.CONTACTS)}
        />
        <BlockUserModal
          isVisible={blockModalVisible}
          onClose={() => setblockModalVisible(false)}
        />
        <MuteUserModal
          isVisible={muteModalVisible}
          onClose={() => setmuteModalVisible(false)}
        />
      </Layout>
    </>
  )
}

export default MessagesScreen
