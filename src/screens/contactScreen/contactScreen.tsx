import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { AppHeader, ContactItem, Layout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { SCREENS } from '../../assets/constants'

const ContactScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)
  const setopenedChat = useInbox(inboxStateSelectors.setopenedChat)

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>


        <AppHeader
          title={lang['_52']}
          hideBackBtn={true}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item, index }) => (
              <ContactItem
                item={item}
                onPress={() => {
                  setopenedChat(item)
                  navigation.navigate(SCREENS.CHAT)
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />

        </Layout>

      </Layout>
    </>
  )
}

export default ContactScreen
