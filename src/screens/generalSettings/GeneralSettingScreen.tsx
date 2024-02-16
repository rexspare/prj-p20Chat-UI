import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Layout,
    PrimaryHeader,
    SettingWithOptionItem
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'


const CURRENCY_DATA = [
    { label: 'USD-PVT-USD', value: '1' },
    { label: 'USD-PVT-USD', value: '2' },
    { label: 'USD-PVT-USD', value: '3' },
    { label: 'USD-PVT-USD', value: '4' },
    { label: 'USD-PVT-USD', value: '1' },
    { label: 'USD-PVT-USD', value: '2' },
    { label: 'USD-PVT-USD', value: '3' },
    { label: 'USD-PVT-USD', value: '4' },
    { label: 'USD-PVT-USD', value: '1' },
    { label: 'USD-PVT-USD', value: '2' },
    { label: 'USD-PVT-USD', value: '3' },
    { label: 'USD-PVT-USD', value: '4' },
];

const PRIMARY_CURRENCY = [
    { label: 'Native', value: '1' },
    { label: 'Flat', value: '2' },
];

const LANGUAGE_DATA = [
    { label: 'Spanish', value: '1' },
    { label: 'Spanis', value: '2' },
    { label: 'Spanish', value: '3' },
    { label: 'Spanis', value: '4' },
];


const SEARCH_ENGINES = [
    { label: 'DuckDuckGo', value: '1' },
    { label: 'Google', value: '2' },
];

const ACCOUNT_IDENTICON = [
    { label: 'Jazzicons', value: '1' },
    { label: 'Blockies', value: '2' },
];

const GeneralSettingsScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()


    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_118']}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%' }}>

                <SettingWithOptionItem
                    title={lang['_130']}
                    subtitle={lang['_131']}
                    data={CURRENCY_DATA}
                    type='DROPDOWN'
                    dropDownTitle={lang['_146']}
                />

                <SettingWithOptionItem
                    title={lang['_132']}
                    subtitle={lang['_133']}
                    data={PRIMARY_CURRENCY}
                    type='RADIO'
                />

                <SettingWithOptionItem
                    title={lang['_136']}
                    subtitle={lang['_137']}
                    data={LANGUAGE_DATA}
                    type='DROPDOWN'
                    dropDownTitle={lang['_147']}
                />

                <SettingWithOptionItem
                    title={lang['_138']}
                    subtitle={lang['_139']}
                    data={SEARCH_ENGINES}
                    type='DROPDOWN'
                    dropDownTitle={lang['_138']}
                />

                <SettingWithOptionItem
                    title={lang['_140']}
                    subtitle={lang['_141']}
                    data={SEARCH_ENGINES}
                    type='SWITCH'
                    dropDownTitle={lang['_138']}
                />

                <SettingWithOptionItem
                    title={lang['_142']}
                    subtitle={lang['_143']}
                    data={ACCOUNT_IDENTICON}
                    type='RADIO_BIG'
                    dropDownTitle={lang['_138']}
                />


            </Layout>
        </Layout>
    )
}

export default GeneralSettingsScreen
