import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { BodyText, ChatItem, CommonHeader, HomeHeader, Label, Layout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, StatusBar, View } from 'react-native'
import { COLORS } from '../../assets/stylesGuide'
import { CHATS_LIST } from '../../data'

const MessagesScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [filteredDataSource, setfilteredDataSource] = useState(CHATS_LIST)

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <HomeHeader
          title={lang['_28']}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item, index }) => (<ChatItem item={item} />)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />

        </Layout>

      </Layout>
    </>
  )
}

export default MessagesScreen
