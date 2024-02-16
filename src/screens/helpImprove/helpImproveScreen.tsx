import React from 'react'
import { View } from 'react-native'
import { COMMON_STYLES, hp, normalize } from '../../assets/stylesGuide'
import { AppHeader, BodyText, InfoItem, Layout, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { CrossIcon, TickIcon } from '../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const HelpImproveScreen = () => {
  const { lang } = useAppConfig()
  const navigation = useNavigation()

  const DATA_LIST = [
    {
      id: 1,
      icon: <TickIcon width={normalize(13)} height={normalize(13)} />,
      text: lang['_11'],
      never: false
    },
    {
      id: 2,
      icon: <TickIcon width={normalize(13)} height={normalize(13)} />,
      text: lang['_12'],
      never: false
    },
    {
      id: 3,
      icon: <CrossIcon width={normalize(13)} height={normalize(13)} />,
      text: lang['_13'],
      never: lang['_18']
    },
    {
      id: 4,
      icon: <CrossIcon width={normalize(13)} height={normalize(13)} />,
      text: lang['_14'],
      never: lang['_18']
    },
    {
      id: 5,
      icon: <CrossIcon width={normalize(13)} height={normalize(13)} />,
      text: lang['_15'],
      never: lang['_18']
    },
  ]

  return (
    <Layout fixed={true}>
      <AppHeader
        title={lang['_09']} />

      <Layout containerStyle={COMMON_STYLES.mainPad}>
        <BodyText style={{
          paddingHorizontal: '4%',
          marginTop: hp(2)
        }}>{lang['_10']}</BodyText>

        {/* LIST */}
        <View style={styles.center}>
          {
            DATA_LIST.map((item, index) => (
              <InfoItem item={item} key={index} />
            ))
          }
        </View>

        <BodyText style={{ paddingHorizontal: '4%' }}>{lang['_16']}</BodyText>
        <BodyText style={{
          paddingHorizontal: '4%',
          marginVertical: hp(3)
        }}>{lang['_17']}</BodyText>

        {/* BUTTON CONTAINER */}
        <View style={styles.btnConatiner}>
          <PrimaryButton
            title={lang['_07']}
            onPress={() => { navigation.navigate(SCREENS.CREATE_PASSWORD) }}
            disabled={false}
          />
          <PrimaryButton
            title={lang['_08']}
            onPress={() => { navigation.navigate(SCREENS.CREATE_PASSWORD) }}
            filled={true}
            disabled={false}
          />
        </View>

      </Layout>

    </Layout>
  )
}

export default HelpImproveScreen
