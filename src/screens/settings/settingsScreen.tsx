import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Layout,
    PrimaryHeader,
    SettingItem,
    TextButton
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { SCREENS } from '../../assets/constants'


const data = [
    { label: 'PVT-USD', value: '1' },
    { label: 'PVT-USD', value: '2' },
    { label: 'PVT-USD', value: '3' },
    { label: 'PVT-USD', value: '4' },
];

const SettingsScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()



    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_117']}
                hideBackBtn={true}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%' }}>

                <SettingItem
                    title={lang['_118']}
                    subtitle={lang['_119']}
                    onPress={() => navigation.navigate(SCREENS.GENERAL_SETTINGS)}
                />

                <SettingItem
                    title={lang['_120']}
                    subtitle={lang['_121']}
                    onPress={() => navigation.navigate(SCREENS.SECURITY_SETTINGS)}
                />

                <SettingItem
                    title={lang['_122']}
                    subtitle={lang['_123']}
                    onPress={() => navigation.navigate(SCREENS.ADVANCED_SETTINGS)}
                />

                <SettingItem
                    title={lang['_124']}
                    subtitle={lang['_125']}
                    onPress={() => navigation.navigate(SCREENS.CONTACT_SETTING)}
                />

                <SettingItem
                    title={lang['_126']}
                    subtitle={lang['_127']}
                    onPress={() => navigation.navigate(SCREENS.NETWORK_SETTING)}
                />
                <SettingItem
                    title={lang['_128']}
                    onPress={() => navigation.navigate(SCREENS.ABOUT_P20)}
                />


                <TextButton
                    title={lang['_129']}
                    style={styles.btn}
                    textStyle={styles.btnTxt}
                    onPress={() => { }}
                />


            </Layout>
        </Layout>
    )
}

export default SettingsScreen
