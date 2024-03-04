import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, Label } from '..';
import { CallIcon, IncommingIcon, OutgoingIcon, VideoCallIcon } from '../../assets/icons';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { isDeviceTablet } from '../../utils/myUtils';
import { SCREENS } from '../../assets/constants';

interface callItemProps {
  item: any;
}

const CallItem: FC<callItemProps> = (props) => {
  const {
    item
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

            <View style={COMMON_STYLES.flexRowSpaceBetween}>
              {
                item?.incommingCall ?
                  <IncommingIcon width={hp(1.5)} height={hp(1.12)} />
                  :
                  <OutgoingIcon width={hp(1.5)} height={hp(1.12)} />
              }
              <BodyText
                numberOfLines={1}
                style={styles.txt1}>
                {item.time}</BodyText>
            </View>
          </View>

          {/* ICONS */}

          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPressIn={() => {
                setopenedChat(item)
                navigation.navigate(SCREENS.VIDEO_CALL)
              }}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              style={styles.btnContainer1}
            >
              <VideoCallIcon
                width={hp(2.68)}
                height={hp(2.68)} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPressIn={() => {
                setopenedChat(item)
                navigation.navigate(SCREENS.AUDIO_CALL)
              }}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              style={styles.btnContainer}
            >
              <CallIcon
                fill={COLORS.SECONDARY}
                width={hp(2.46)}
                height={hp(2.46)} />
            </TouchableOpacity>

          </View>


        </View>

      </TouchableOpacity>
    </View>
  )
}

export default React.memo(CallItem)

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
    fontSize: FONT_SIZE._12,
    fontWeight: '400',
    marginTop: hp(0.25),
    marginLeft: 3
  },
  txt2: {
    color: theme.PRIMARY,
    fontSize: FONT_SIZE._14,
    fontWeight: '700',
    marginTop: hp(0.25)
  },
  row: {
    ...COMMON_STYLES.flexRowSpaceBetween
  },
  btnContainer: {
    marginLeft: hp(3.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer1: {
    justifyContent: 'center',
    alignItems: 'center'
  },


})