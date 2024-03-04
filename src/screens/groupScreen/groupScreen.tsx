import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { Alert, FlatList, Image, ImageBackground, Platform, ScrollView, StatusBar, TextInput, View } from 'react-native'
import { AppHeader, BodyText, CallItem, ContactItem, GroupContactItem, If, Layout, PrimaryButton, Spacer, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS, hp } from '../../assets/stylesGuide'
import { FRIENDS_AVATARS } from '../../assets/images'
import { FlashList } from '@shopify/flash-list'

const GroupScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const filteredDataSource = useInbox(inboxStateSelectors.filteredChatList)

  const [list, setlist] = useState<any[]>([])
  const [selectedContacts, setselectedContacts] = useState<any[]>([])
  const [isNextPressed, setisNextPressed] = useState(false)
  const [groupName, setgroupName] = useState('')

  useEffect(() => {
    setlist(filteredDataSource)
  }, [])

  const handleRemove = (contact: any) => {
    setselectedContacts(selectedContacts.filter((x: any) => x.id != contact.id))
  }

  const handleSearch = (val: string) => {
    if (typeof val == 'string') {
      if (val != '') {
        const filtered = filteredDataSource.filter((x: any) => (
          x?.name?.toString()?.toUpperCase().includes(val?.toString()?.toUpperCase())
        ))
        setlist(filtered)
      } else {
        setlist(filteredDataSource)
      }
    }
  }

  const handleBtnPress = () => {
    if (isNextPressed == false) {
      setisNextPressed(true)
    } else {
      Alert.alert("Group Created", "New group created")
      setselectedContacts([])
      setisNextPressed(false)
    }
  }

  const renderMembers = () => (
    <ScrollView
      horizontal
      contentContainerStyle={styles.row}
      showsHorizontalScrollIndicator={false}
    >
      {
        selectedContacts.map((contact, index) => (
          <View
            key={index}
            style={styles.item}
          >
            <ImageBackground
              source={contact.avatar}
              style={styles.avatar}
            >
              <TouchableCustom
                style={styles.crossContainer}
                onPress={() => handleRemove(contact)}
              >
                <Feather
                  name='x'
                  color={COLORS.WHITE}
                  size={hp(1)}
                />
              </TouchableCustom>
            </ImageBackground>
            <BodyText style={styles.txt2}>{contact.name?.slice(0, 6)}..</BodyText>
          </View>
        ))
      }
    </ScrollView>
  )

  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>


        <AppHeader
          title={lang['_187']}
          subtle={selectedContacts.length > 0 ?
            `${selectedContacts.length} ${lang['_190']} ${filteredDataSource.length} ${lang['_191']} `
            :
            lang['_188']}
          showRightIcon={true}
          onChangeInput={handleSearch}
          onBackPress={isNextPressed ? () => setisNextPressed(false) : null}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>

          {
            isNextPressed ?
              <>
                <View style={styles.topContainer}>

                  <View style={styles.inputRow}>
                    <Image
                      source={FRIENDS_AVATARS.P1}
                      style={styles.avatar}
                    />

                    <TextInput
                      value={groupName}
                      onChangeText={(txt: string) => setgroupName(txt)}
                      placeholder={lang['_192']}
                      placeholderTextColor={theme.ACCENT}
                      style={styles.input}
                    />

                  </View>

                  <BodyText style={styles.txt1}>{lang['_193']} {selectedContacts.length}</BodyText>
                  {renderMembers()}

                </View>
              </>
              :
              <View style={styles.topContainer}>

                <If condition={selectedContacts.length > 0}>
                  {renderMembers()}
                  <View style={styles.line}></View>
                </If>

                <BodyText style={styles.txt}>{lang['_189']}</BodyText>
              </View>
          }

          <If condition={isNextPressed == false}>
            <FlashList
              data={list}
              renderItem={({ item, index }) => (
                <GroupContactItem
                  item={item}
                  selectedContacts={selectedContacts}
                  setselectedContacts={setselectedContacts}
                />
              )}
              ListFooterComponent={<Spacer height={hp(10)} />}
              showsVerticalScrollIndicator={false}
              estimatedItemSize={hp(10)}
              // contentContainerStyle={styles.contentContainerStyle}
              ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
            />
          </If>

          {/* BUTTON */}
          <If condition={selectedContacts.length > 0}>
            <View style={styles.absoluteContainer}>
              <PrimaryButton
                title={lang[isNextPressed ? '_195' : '_194']}
                onPress={() => handleBtnPress()}
              />
            </View>
          </If>

        </Layout>

      </Layout>
    </>
  )
}

export default GroupScreen
