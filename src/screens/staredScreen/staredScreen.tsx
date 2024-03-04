import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { hp } from '../../assets/stylesGuide'
import { Layout, Spacer, StaredHeader, StaredItem } from '../../components'
import { VideoPlayerModal } from '../../components/popups'
import { STARED_MESSAGES } from '../../data'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'

const StaredScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)

  const [filteredDataSource, setfilteredDataSource] = useState(STARED_MESSAGES)
  const [isVideoPlayerVisible, setisVideoPlayerVisible] = useState(false)

  const handlePlayVideo = (item: any) => {
    setisVideoPlayerVisible(true)
  }


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
          <FlashList
            data={filteredDataSource}
            renderItem={({ item, index }) => (
              <StaredItem
                item={item}
                playVideo={() => handlePlayVideo(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={hp(20)}
            // contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
          />

        </Layout>
        <VideoPlayerModal
          isVisible={isVideoPlayerVisible}
          onClose={() => setisVideoPlayerVisible(false)}
        />
      </Layout>
    </>
  )
}

export default StaredScreen
