import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { ChatHeader, ChatItem, Layout } from '../../components'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'

const ChatScreen = () => {
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

        <ChatHeader
          title={lang['_28']}
          setblockModalVisible={setblockModalVisible}
          setmuteModalVisible={setmuteModalVisible}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          {/* <FlatList
            data={filteredDataSource}
            renderItem={({ item, index }) => (<ChatItem item={item} />)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          /> */}

        </Layout>

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

export default ChatScreen
