import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { COLORS, hp, normalize, wp } from '../../assets/stylesGuide'
import { hasNotch, isIOS } from '../../utils/myUtils'
import { BodyText, If, Label } from '..';
import { BackIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Entypo from 'react-native-vector-icons/Entypo'
import useAppConfig from '../../hooks/AppConfig';
import { SCREENS } from '../../assets/constants';

interface primaryHeaderProps {
  hideBackBtn?: boolean;
  title?: string;
  rightIcon?: ReactNode;
  backPress?: any;
}

const PrimaryHeader: React.FC<primaryHeaderProps> = (props) => {
  const { hideBackBtn = false, title = 'P20', rightIcon, backPress = false } = props
  const navigation = useNavigation()
  const { lang } = useAppConfig()

  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
    navigation.navigate(SCREENS.RECIEVE)
  }

  const showMenu = () => setVisible(true);

  return (
    <View style={styles.main}>

      {
        hideBackBtn == false ?
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: wp(3.5),
            }}
            onPress={() => {
              if(backPress != false){
                backPress()
              } else {
                navigation.goBack()
              }
            }}
          >
            <BackIcon
              width={hp(2.5)}
            />
          </TouchableOpacity>
          :
          <View style={{
            padding: wp(5.5),
          }}></View>
      }

      <View style={styles.txtContainer}>
        <Label size={normalize(15)}>{title}</Label>
      </View>

      {
        rightIcon ?
          <Menu
            style={styles.menu}
            visible={visible}
            anchor={
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ padding: wp(3.5) }}
                onPress={() => showMenu()}
              >
                <Entypo
                  name='dots-three-vertical'
                  color={COLORS.TEXT}
                  size={hp(2.5)}
                />
              </TouchableOpacity>
            }
            onRequestClose={hideMenu}
          >
            <MenuItem onPress={hideMenu}><BodyText>{lang['_80']}</BodyText></MenuItem>
          </Menu>

          :
          <View style={{
            padding: wp(5.5),
          }}></View>
      }

    </View >
  )
}

export default PrimaryHeader

const styles = StyleSheet.create({
  main: {
    width: wp(100),
    minHeight: (isIOS() && hasNotch()) ? 50 : 55,
    marginTop: (isIOS() && hasNotch()) ? 70 : 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderBottomWidth: 1.2,
    borderColor: COLORS.DISABLED
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center'
  },
  menu: {
    marginTop: hp(5),
    borderRadius: 10,
    padding: 5,
    marginRight: 100,
    paddingBottom: -5
  }
})