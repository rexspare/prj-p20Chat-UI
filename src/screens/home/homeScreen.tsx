import React, { useState } from 'react'
import { FlatList, Image, View, useWindowDimensions } from 'react-native'
import { AccountModal, ActionButton, BodyText, DropDownButton, GenerateAddresButton, If, Label, Layout, NetworkModal, TextButton, TokenItem, TokenModal } from '../../components'
import { styles } from './styles'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../../assets/stylesGuide'
import { IMAGES } from '../../assets/images'
import useAppConfig from '../../hooks/AppConfig'
import { BridgeIcon, RecieveIcon, SendIcon } from '../../assets/icons'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'
import { useWallet, walletStateSelectors } from '../../states/walllet'

const HomeScreen = () => {
  const { lang } = useAppConfig()
  const navigation = useNavigation()
  const layout = useWindowDimensions();
  const selectedToken = useWallet(walletStateSelectors.selectedToken)
  const selectedAccount = useWallet(walletStateSelectors.selectedAccount)

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: lang['_53'] },
    { key: 'second', title: lang['_54'] },
  ])
  const [address, setaddress] = useState("")
  const [accountModalVisible, setaccountModalVisible] = useState(false)
  const [networkModalVisible, setnetworkModalVisible] = useState(false)
  const [tokenModalVisible, settokenModalVisible] = useState(false)

  const renderScene = SceneMap({
    first: () => (
      <Layout fixed={true}>
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}, {},]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(1) }}
          renderItem={({ item, index }) => <TokenItem
            item={item}
            onPress={() => navigation.navigate(SCREENS.TOKEN_DETAIL)}
          />}
          ListEmptyComponent={() => (
            <Layout fixed={true} containerStyle={styles.emptyContainer}>
              <View style={styles.emptyContainer}>
                <Image
                  source={IMAGES.PVT_DISABLED}
                  style={styles.emptyImg}
                />
                <BodyText style={styles.emptyTxt}>{lang['_57']}</BodyText>
              </View>
            </Layout>
          )}
        />
      </Layout>
    ),
    second: () => (
      <Layout fixed={true}>
        <FlatList
          data={[]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(1) }}
          renderItem={({ item, index }) => <TokenItem item={item} />}
          ListEmptyComponent={() => (
            <Layout fixed={true} containerStyle={styles.emptyContainer}>
              <View style={styles.emptyContainer}>
                <Image
                  source={IMAGES.PVT_DISABLED}
                  style={styles.emptyImg}
                />
                <BodyText style={styles.emptyTxt}>{lang['_58']}</BodyText>
              </View>
            </Layout>
          )}
        />
      </Layout>
    )
  });

  return (
    <Layout fixed={true}>
      {/* HEADER */}
      <View style={styles.headerContainer}>

        <View style={styles.rowContainer}>
          <DropDownButton
            title={selectedAccount?.name}
            onPress={() => setaccountModalVisible(true)}
          />
          <DropDownButton
            title={selectedToken?.shortName || 'PVT'}
            image={selectedToken?.icon || IMAGES.PVT}
            filled={false}
            titleStyles={{
              marginLeft: wp(3.5),
              marginRight: wp(3.5)
            }}
            onPress={() => setnetworkModalVisible(true)}
          />
        </View>

        <View style={[styles.rowContainer, styles.amountContainer]}>
          <View>
            <BodyText style={styles.pointsTxt}><Label size={normalize(15)} fontFamily={FONTS.SEMI_BOLD}>1231</Label> PVT-USD</BodyText>
            <BodyText style={styles.amountTxt}>$0.00 USD</BodyText>
          </View>


          <GenerateAddresButton
            title={lang['_47']}
            onPress={() => setaddress("3x17349213142131")}
            address={address}
          />
        </View>

        <View style={[styles.rowContainer, styles.iconContainer]}>

          <ActionButton
            title={lang['_50']}
            icon={<SendIcon width={normalize(36)} height={normalize(36)} />}
            onPress={() => navigation.navigate(SCREENS.SEND)}
          />

          <ActionButton
            title={lang['_51']}
            icon={<RecieveIcon width={normalize(36)} height={normalize(36)} />}
            onPress={() => navigation.navigate(SCREENS.RECIEVE)}
          />

          <ActionButton
            title={lang['_52']}
            icon={<BridgeIcon width={normalize(36)} height={normalize(36)} />}
            onPress={() => navigation.navigate(SCREENS.BRIDGE)}
          />

        </View>

      </View>
      {/* END */}

      {/* CONTEXT */}
      <Layout fixed={true} >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => <TabBar
            {...props}
            activeColor={COLORS.PRIMARY}
            inactiveColor={COLORS.TEXT}
            indicatorStyle={{ backgroundColor: COLORS.PRIMARY }}
            style={{ backgroundColor: COLORS.BACKGROUND }}
            renderLabel={({ route, focused, color }) => (
              <BodyText style={{ color, fontSize: normalize(12), marginVertical: 0 }}>
                {route.title}
              </BodyText>
            )}
          />}
        />
      </Layout>
      {/* END */}

      <If condition={index == 0}>
        <View style={styles.row}>
          <BodyText style={styles.bottomTxt}>{lang['_55']} </BodyText>
          <TextButton
            title={lang['_56']}
            onPress={() => settokenModalVisible(true)}
            textStyle={styles.bottomTxt}
          />
        </View>
      </If>

      <AccountModal
        isVisible={accountModalVisible}
        onClose={() => setaccountModalVisible(false)}
      />
      <NetworkModal
        isVisible={networkModalVisible}
        onClose={() => setnetworkModalVisible(false)}
        addNetwork={() => { }}
      />

      <TokenModal
        isVisible={tokenModalVisible}
        onClose={() => settokenModalVisible(false)}
      />
    </Layout>
  )
}

export default HomeScreen

