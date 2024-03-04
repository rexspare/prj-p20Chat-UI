import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { AppHeader, CallItem, ChatHeader, ChatItem, Label, Layout, Spacer } from '../../components'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { FlashList } from '@shopify/flash-list'
import { hp } from '../../assets/stylesGuide'

const CallHistoryScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>


        <AppHeader
          title={lang['_51']}
          hideBackBtn={true}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          <FlashList
            data={filteredDataSource}
            renderItem={({ item, index }) => (<CallItem item={item} />)}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={hp(10)}
            // contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
          />

        </Layout>

      </Layout>
    </>
  )
}

export default CallHistoryScreen
