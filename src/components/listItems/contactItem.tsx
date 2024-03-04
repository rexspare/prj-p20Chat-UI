import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { hp, COMMON_STYLES, FONT_SIZE, FONTS, COLORS } from '../../assets/stylesGuide';
import { BodyText, If, Label } from '..';
import { CallIcon, IncommingIcon, OutgoingIcon, SeenIcon, SelectedIcon, VideoCallIcon } from '../../assets/icons';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { isDeviceTablet } from '../../utils/myUtils';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../assets/constants';

interface contactItemProps {
  item: any;
  onPress?: Function;
}

const ContactItem: FC<contactItemProps> = (props) => {
  const {
    item,
    onPress = undefined
  } = props

  const navigation = useNavigation()
  const { theme } = useAppConfig()
  const styles = styles_(theme)

  const setselectedChats = useInbox(inboxStateSelectors.setselectedChats)
  const setopenedChat = useInbox(inboxStateSelectors.setopenedChat)

  const handleLongPress = () => {

  }

  const handleSelect = () => {
    // IF SELECTING MULTIPLE
    if (onPress) {
      onPress(item)
    }
  }


  return (
    <View style={styles.main}>

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
        </ImageBackground>

        <View style={styles.context}>
          {/* NAME */}
          <View style={styles.txtContainer}>
            <Label style={styles.txt} numberOfLines={1}>{item.name} </Label>
            <BodyText
              numberOfLines={1}
              style={styles.txt1}>
              {item.number}</BodyText>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  )
}

export default React.memo(ContactItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
  main: {
    width: '100%',
  },
  item: {
    width: isDeviceTablet() ? "98%" : "92%",
    ...COMMON_STYLES.flexRowSpaceBetween,
    paddingVertical: hp(1.8),
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_BOTTOM,
    alignSelf: 'center'
  },
  line: {
    width: isDeviceTablet() ? "96%" : "90%",
    borderBottomWidth: 1 / 2,
    backgroundColor: theme.BORDER
  },
  avatarContainer: {
    width: hp(5.9),
    height: hp(5.9),
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
    justifyContent: 'center',
  },
  txt: {
    color: theme.BLACK_TO_WHITE,
    fontSize: FONT_SIZE._16
  },
  txt1: {
    color: theme.ACCENT,
    fontSize: FONT_SIZE._14,
    fontFamily: FONTS.MEDIUM,
    marginTop: hp(0.25),
    marginLeft: 3
  },
})