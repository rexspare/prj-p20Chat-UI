import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { hp, COMMON_STYLES, FONT_SIZE, FONTS, COLORS } from '../../assets/stylesGuide';
import { BodyText, If, Label } from '..';
import { SeenIcon, SelectedIcon } from '../../assets/icons';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { isDeviceTablet } from '../../utils/myUtils';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../assets/constants';

interface chatItemProps {
  item: any;
}

const ChatItem: FC<chatItemProps> = (props) => {
  const {
    item
  } = props
  const navigation = useNavigation()
  const { theme } = useAppConfig()
  const styles = styles_(theme)

  const setselectedChats = useInbox(inboxStateSelectors.setselectedChats)
  const selectedChats = useInbox(inboxStateSelectors.selectedChats)
  const setopenedChat = useInbox(inboxStateSelectors.setopenedChat)

  const handleLongPress = () => {
    if (selectedChats?.length > 0) {
      return
    }
    const exists = selectedChats.find((x: any) => x.id == item.id)
    if (!exists) {
      setselectedChats([...selectedChats, item])
    }
  }

  const handleSelect = () => {
    // IF SELECTING MULTIPLE
    if (selectedChats?.length > 0) {
      const exists = selectedChats.find((x: any) => x.id == item.id)
      if (!exists) {
        setselectedChats([...selectedChats, item])
      } else {
        setselectedChats(selectedChats.filter((x: any) => x.id != item.id))
      }
    } else {
      // OPEN CHAT
      setopenedChat(item)
      navigation.navigate(SCREENS.CHAT)
    }
  }

  const isChatSelected = () => {
    const exists = selectedChats.find((x: any) => x?.id == item?.id)
    return exists ? true : false
  }

  return (
    <View style={[styles.main, {
      ...(isChatSelected() && { backgroundColor: theme.SELECTED_CHAT_BG })
    }]}>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.item}
        onLongPress={() => handleLongPress()}
        onPress={() => handleSelect()}
      >

        <ImageBackground
          source={item.avatar}
          style={styles.avatarContainer}
          imageStyle={styles.avatar}
        >
          <If condition={isChatSelected()}>
            <SelectedIcon width={hp(1.8)} height={hp(1.8)} />
          </If>
        </ImageBackground>

        <View style={styles.context}>
          {/* NAME */}
          <View style={styles.txtContainer}>

            {/* NAME AND DATE */}
            <View style={styles.nameDate}>
              <View style={styles.row}>
                <Label style={styles.txt} numberOfLines={1}>{item.name} </Label>

                <If condition={item.unReadMessages > 0}>
                  <View style={styles.circle}>
                    <BodyText style={styles.txt3} >{item.unReadMessages}</BodyText>
                  </View>
                </If>

              </View>

              <BodyText style={styles.txt4}>{item.time}</BodyText>

            </View>

            {/* LAST MESSAGE AND SEEN ICON */}
            <View style={styles.msgSeen}>
              <BodyText
                numberOfLines={1}
                style={item.unReadMessages > 0 ? styles.txt2 : styles.txt1}>
                {item.lastMessage}</BodyText>

              <SeenIcon
                fill={item.unReadMessages > 0 ? theme.BACKGROUND : theme.BLACK_TO_WHITE}
                width={hp(1.8)}
                height={hp(1.8)}
              />
            </View>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  )
}

export default React.memo(ChatItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
  main: {
    width: '100%',
  },
  item: {
    width: isDeviceTablet() ? "98%" : "92%",
    ...COMMON_STYLES.flexRowSpaceBetween,
    paddingVertical: hp(2),
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_BOTTOM,
    alignSelf: 'center'
  },
  avatarContainer: {
    width: hp(4),
    height: hp(4),
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: hp(5.9),
    resizeMode: 'cover',
  },
  context: {
    flex: 1,
    height: '100%',
    ...COMMON_STYLES.flexRowSpaceBetween,
    paddingLeft: hp(1.5),
  },
  txtContainer: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  txt: {
    color: theme.BLACK_TO_WHITE,
    fontSize: FONT_SIZE._15,
    maxWidth: '90%',
    fontFamily: FONTS.MEDIUM,
  },
  txt1: {
    color: theme.ACCENT,
    fontSize: FONT_SIZE._14 - 0.5,
    fontFamily: FONTS.REGULAR,
  },
  txt2: {
    color: theme.PRIMARY,
    fontSize: FONT_SIZE._14 - 0.5,
    fontFamily: FONTS.MEDIUM,
  },
  txt3: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE._12,
    fontFamily: FONTS.REGULAR,
  },
  row: {
    ...COMMON_STYLES.flexRowSpaceBetween,
    flex: 1,
    justifyContent: 'flex-start'
  },
  nameDate: {
    ...COMMON_STYLES.flexRowSpaceBetween,
    width: '100%',
    marginBottom: hp(0.75)
  },
  msgSeen: {
    ...COMMON_STYLES.flexRowSpaceBetween,
    width: '100%',
  },
  circle: {
    backgroundColor: COLORS.SECONDARY,
    width: hp(1.8),
    height: hp(1.8),
    borderRadius: hp(2),
    marginLeft: hp(0.5)
  },
  txt4: {
    color: theme.ACCENT,
    fontSize: FONT_SIZE._12,
    fontFamily: FONTS.MEDIUM,
  },
  timeContainer: {
    alignItems: 'flex-end',
    minHeight: hp(5),
    justifyContent: 'space-between'
  }
})