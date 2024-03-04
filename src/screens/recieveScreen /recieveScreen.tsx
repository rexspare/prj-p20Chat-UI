import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, StatusBar, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { hp } from '../../assets/stylesGuide'
import { AppHeader, BodyText, CoinItem, If, Layout, PrimaryButton, Spacer } from '../../components'
import { COINSLIST } from '../../data'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { styles as styles_ } from './styles'
import { FlashList } from '@shopify/flash-list'

const RecieveScreen = () => {
  const { lang, theme } = useAppConfig()
  const { keyboardStatus } = useKeyboard()
  const navigation = useNavigation()

  const styles = styles_(theme)
  const setselectedAsset = useWallet(walletStateSelectors.setselectedAsset)
  const selectedAsset = useWallet(walletStateSelectors.selectedAsset)

  const [filteredDataSource, setfilteredDataSource] = useState(COINSLIST)
  const [isAssetselected, setisAssetselected] = useState(false)

  const handleFilter = (txt: string) => {
    if (txt != '') {
      const filtered = COINSLIST.filter((coin) => (
        coin?.name?.toString()?.toUpperCase().includes(txt?.toString()?.toUpperCase()) ||
        coin?.shortName?.toString()?.toUpperCase().includes(txt?.toString()?.toUpperCase())
      ))
      setfilteredDataSource(filtered)
    } else {
      setfilteredDataSource(COINSLIST)
    }
  }

  const handleSelect = (val: any) => {
    setselectedAsset(val)
    setisAssetselected(true)
  }


  return (
    <>
      <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
      <Layout fixed={true} containerStyle={styles.main}>

        <AppHeader
          title={isAssetselected ? `${lang['_116']} ${selectedAsset.shortName}` : lang['_115']}
          showRightIcon={isAssetselected == false}
          onChangeInput={handleFilter}
          onBackPress={isAssetselected ? () => setisAssetselected(false) : null}
        />

        <Layout
          fixed={true}
          containerStyle={styles.container}>

          {
            !isAssetselected ?
              <FlashList
                data={filteredDataSource}
                renderItem={({ item, index }) => (
                  <CoinItem
                    item={item}
                    onPress={() => handleSelect(item)}
                  />
                )}
                estimatedItemSize={hp(11)}
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={styles.contentContainerStyle}
                ListHeaderComponent={() => <Spacer height={hp(0.5)} />}
              />
              :
              <Layout>

                <Image
                  source={selectedAsset.icon}
                  style={styles.icon}
                />

                <BodyText style={styles.txt1}>{lang['_117']}</BodyText>

                <Image
                  source={IMAGES.QR}
                  style={styles.qr}
                />

                {/* LINE OR LINE */}
                <View style={styles.row}>
                  <View style={styles.line}></View>
                  <BodyText style={styles.txt2}>or</BodyText>
                  <View style={styles.line}></View>
                </View>


                <BodyText style={styles.txt3}>{`${lang['_118']} ${selectedAsset.shortName} ${lang['_119']}`}</BodyText>


                {/* ADDRESS */}

                <View style={styles.addressContainer}>
                  <BodyText style={styles.txt4}>N3veRg0nnAgiV3y0uUpn3v3rg0nn4L3ty0ud0wn</BodyText>
                </View>

                <Spacer height={hp(20)} />
              </Layout>
          }

          <If condition={isAssetselected}>
            <View style={styles.btnContainer}>
              <PrimaryButton
                title={lang['_120']}
                onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}
                style={styles.btn}
                textStyle={styles.btnTxt}
              />
              <PrimaryButton
                title={lang['_121']}
                onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}

              />
            </View>
          </If>

        </Layout>



      </Layout>
    </>
  )
}

export default RecieveScreen
