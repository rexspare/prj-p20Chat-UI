import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { hp, COMMON_STYLES, FONT_SIZE, FONTS, COLORS } from '../../assets/stylesGuide';
import { BodyText, If, Label } from '..';
import { SeenIcon } from '../../assets/icons';

interface chatItemProps {
  item: any;
}

const ChatItem: FC<chatItemProps> = (props) => {
  const {
    item
  } = props
  const { theme } = useAppConfig()

  const styles = styles_(theme)

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.main}
    >

      <Image
        source={item.avatar}
        style={styles.avatar}
      />

      <View style={styles.context}>
        {/* NAME */}
        <View style={styles.txtContainer}>

          <View style={styles.row}>
            <Label style={styles.txt} numberOfLines={1}>{item.name} </Label>

            <If condition={item.unReadMessages > 0}>
              <View style={styles.circle}>
                <BodyText style={styles.txt3} >{item.unReadMessages}</BodyText>
              </View>
            </If>

          </View>

          <BodyText
            numberOfLines={1}
            style={item.unReadMessages > 0 ? styles.txt2 : styles.txt1}>
            {item.lastMessage}</BodyText>
        </View>

        {/* NAME AND SEEN ICON */}
        <View style={styles.timeContainer}>
          <BodyText style={styles.txt4}>{item.time}</BodyText>
          <SeenIcon
            fill={item.unReadMessages > 0 ? theme.BACKGROUND : theme.BLACK_TO_WHITE}
            width={hp(1.8)}
            height={hp(1.8)}
          />
        </View>

      </View>

    </TouchableOpacity>
  )
}

export default ChatItem

const styles_ = (theme: ITHEME) => StyleSheet.create({
  main: {
    width: '100%',
    ...COMMON_STYLES.flexRowSpaceBetween,
    paddingVertical: hp(1.5),
    borderBottomWidth: 1 / 2,
    borderColor: theme.BORDER
  },
  avatar: {
    width: hp(5.9),
    height: hp(5.9),
    borderRadius: hp(5.9),
    resizeMode: 'cover'
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
    justifyContent: 'center'
  },
  txt: {
    color: theme.BLACK_TO_WHITE,
    fontSize: FONT_SIZE._16
  },
  txt1: {
    color: theme.ACCENT,
    fontSize: FONT_SIZE._14,
    fontFamily: FONTS.MEDIUM,
    marginTop: hp(0.25)

  },
  txt2: {
    color: theme.PRIMARY,
    fontSize: FONT_SIZE._14,
    fontFamily: FONTS.BOLD,
    marginTop: hp(0.25)
  },
  txt3: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE._12,
    fontFamily: FONTS.BOLD,
  },
  row: {
    ...COMMON_STYLES.flexRowSpaceBetween
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
    marginBottom: hp(0.25)
  },
  timeContainer: {
    alignItems: 'flex-end',
  }
})