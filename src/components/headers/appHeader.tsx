import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../assets/stylesGuide'
import { hasNotch, isIOS } from '../../utils/myUtils'
import { If, Label } from '..';
import { BackIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

interface appHeaderProps {
  hideBackBtn?: boolean;
  title?: string;
}

const AppHeader: React.FC<appHeaderProps> = (props) => {
  const { hideBackBtn = false, title = 'P20' } = props
  const navigation = useNavigation()

  return (
    <View style={styles.main}>

      <View style={styles.txtContainer}>
        <Label>{title}</Label>
      </View>

      <View style={styles.btnContainer}>
        <If condition={hideBackBtn == false}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: wp(3.5),
            }}
            onPress={() => navigation.goBack()}
          >
            <BackIcon
              width={hp(2.5)}
            />
          </TouchableOpacity>
        </If>
      </View>

    </View >
  )
}

export default AppHeader

const styles = StyleSheet.create({
  main: {
    width: wp(100),
    minHeight: (isIOS() && hasNotch()) ? 50 : 55,
    marginTop: (isIOS() && hasNotch()) ? 70 : 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '3%'
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center'
  },
  btnContainer: {
    position: 'absolute'
  }
})