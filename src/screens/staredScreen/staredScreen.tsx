import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { AppHeader, ContactItem, Layout, StaredHeader, StaredItem } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { SCREENS } from '../../assets/constants'
import { STARED_MESSAGES } from '../../data'

const StaredScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [filteredDataSource, setfilteredDataSource] = useState(STARED_MESSAGES)

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>


        <StaredHeader
          title={lang['_207']}
          hideBackBtn={true}
          list={STARED_MESSAGES}
          setList={setfilteredDataSource}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>
          <FlatList
            data={filteredDataSource}
            renderItem={({ item, index }) => (
              <StaredItem
                item={item}
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

export default StaredScreen
