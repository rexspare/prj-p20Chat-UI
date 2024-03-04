import React, { FC } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, If, Label } from '..';
import { SelectedIcon } from '../../assets/icons';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { isDeviceTablet } from '../../utils/myUtils';

interface groupContactItemProps {
  item: any;
  selectedContacts: any;
  setselectedContacts: Function
}

const GroupContactItem: FC<groupContactItemProps> = (props) => {
  const {
    item,
    selectedContacts = [],
    setselectedContacts = () => { }
  } = props
  const { theme } = useAppConfig()
  const styles = styles_(theme)

  const handleSelect = () => {
    const exists = selectedContacts.find((x: any) => x.id == item.id)
    if (!exists) {
      setselectedContacts([...selectedContacts, item])
    } else {
      setselectedContacts(selectedContacts.filter((x: any) => x.id != item.id))
    }
  }

  const isContactSelected = () => {
    const exists = selectedContacts.find((x: any) => x?.id == item?.id)
    return exists ? true : false
  }

  return (
    <View style={[styles.main, {
      ...(isContactSelected() && { backgroundColor: theme.SELECTED_CHAT_BG })
    }]}>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.item}
        onPress={() => handleSelect()}
      >

        <ImageBackground
          source={item.avatar}
          style={styles.avatarContainer}
          imageStyle={styles.avatar}
        >
          <If condition={isContactSelected()}>
            <SelectedIcon width={hp(1.8)} height={hp(1.8)} />
          </If>
        </ImageBackground>

        <View style={styles.context}>
          {/* NAME */}
          <View style={styles.txtContainer}>

            <Label style={styles.txt} numberOfLines={1}>{item.name} </Label>
            <BodyText
              numberOfLines={1}
              style={styles.txt1}>0900-786-01</BodyText>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  )
}

export default React.memo(GroupContactItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
  main: {
    width: '100%',
  },
  item: {
    width: isDeviceTablet() ? "96%" : "90%",
    ...COMMON_STYLES.flexRowSpaceBetween,
    paddingVertical: hp(1.5),
    borderBottomWidth: 1 / 2,
    borderColor: theme.BORDER,
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
    justifyContent: 'center'
  },
  txt: {
    color: theme.BLACK_TO_WHITE,
    fontSize: FONT_SIZE._16,
    maxWidth: '90%'
  },
  txt1: {
    color: theme.ACCENT,
    fontSize: FONT_SIZE._14,
    fontWeight: '500',
    marginTop: hp(0.25)

  },
})