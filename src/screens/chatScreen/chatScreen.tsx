import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { FlatList, StatusBar, View, Animated } from 'react-native'
import { ChatBubble, ChatHeader, ChatInput, ChatItem, Layout, MediaPicker } from '../../components'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { hp } from '../../assets/stylesGuide'
import { inbox } from '../../data'

const ChatScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()
  const marginValue = useRef(new Animated.Value(0)).current;
  const radiusValue = useRef(new Animated.Value(0)).current;
  const bottomList = useRef(new Animated.Value(-hp(26))).current;

  const styles = styles_(theme, marginValue, radiusValue)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)
  const [blockModalVisible, setblockModalVisible] = useState(false)
  const [muteModalVisible, setmuteModalVisible] = useState(false)
  const [isMediaPIckerVisble, setisMediaPIckerVisble] = useState(false)

  const toggleMediaPicker = () => {
    if (isMediaPIckerVisble) {

      Animated.timing(marginValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(radiusValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(bottomList, {
        toValue: -hp(26),
        duration: 500,
        useNativeDriver: false,
      }).start();

      setisMediaPIckerVisble(false)

    } else {

      Animated.timing(marginValue, {
        toValue: hp(26),
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(radiusValue, {
        toValue: hp(4),
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(bottomList, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();

      setisMediaPIckerVisble(true)

    }
  };

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <ChatHeader
          title={lang['_28']}
          setblockModalVisible={setblockModalVisible}
          setmuteModalVisible={setmuteModalVisible}
        />


        <Animated.View style={styles.container}>

          <FlatList
            data={inbox}
            renderItem={({ item, index }: any) => (
              <ChatBubble
                item={item}
                index={index}
              />)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />

          <View style={styles.aboluteContainer}>
            <ChatInput
              toggleMediaPicker={toggleMediaPicker}
            />
          </View>

        </Animated.View>

        {/* MEDIA PICKER */}
        <View style={styles.aboluteContainer1}>
          <Animated.View style={{
            bottom: bottomList
          }}>
            <MediaPicker />
          </Animated.View>
        </View>

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
