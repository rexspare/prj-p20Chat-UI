import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../assets/stylesGuide'
import { AppHeader, BodyText, Layout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'

const HistorySettingScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const [selectedTime, setselectedTime] = useState(1)

  const TIMELINES = [
    {
      id: 1,
      title: lang['_89']
    },
    {
      id: 2,
      title: lang['_90']
    },
    {
      id: 3,
      title: lang['_91']
    },
    {
      id: 4,
      title: lang['_92']
    }
  ]


  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <AppHeader
          title={lang['_79']}
          showRightIcon={true}
          renderRightIcon={<></>}
        />

        {/* CONTEXT */}

        <Layout
          fixed={true}
          containerStyle={styles.container}>


          <BodyText style={styles.txt1}>{lang['_86']}</BodyText>
          <BodyText style={styles.txt2}>{lang['_87']}</BodyText>

          <BodyText style={styles.txt3}>{lang['_88']}</BodyText>

          <View>
            {
              TIMELINES.map((item, index) => (
                <View
                  key={index}
                  style={styles.row1}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setselectedTime(item.id)}
                    style={[styles.outerCirle, {
                      ...(selectedTime == item.id && { borderColor: COLORS.SECONDARY })
                    }]}>
                    {selectedTime == item.id && <View style={styles.innerCirle}></View>}
                  </TouchableOpacity>

                  <BodyText style={styles.txt}>{item.title}</BodyText>
                </View>
              ))
            }
          </View>

        </Layout>

    

      </Layout>
    </>
  )
}

export default HistorySettingScreen
