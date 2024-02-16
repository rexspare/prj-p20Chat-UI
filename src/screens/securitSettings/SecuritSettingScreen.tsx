import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    Layout,
    PrimaryHeader,
    SettingWithOptionItem
} from '../../components'
import DeleteAccountModal from '../../components/popups/DeleteAccuntModal'
import useAppConfig from '../../hooks/AppConfig'
import { SCREENS } from '../../assets/constants'

const AUTO_LOCK_DATA = [
    { label: 'After 30 seconds', value: '1' },
    { label: 'After 60 seconds', value: '2' },
];

const SecuritSettingScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isDeleteMdalVisible, setisDeleteMdalVisible] = useState(false)

    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_168']}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%' }}>

                <SettingWithOptionItem
                    title={lang['_169']}
                    subtitle={lang['_170']}
                    type='BUTTON'
                    buttonTitle={lang['_171']}
                    buttonPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
                />

                <SettingWithOptionItem
                    title={lang['_172']}
                    subtitle={lang['_173']}
                    buttonTitle={lang['_160']}
                    data={AUTO_LOCK_DATA}
                    type='DROPDOWN'
                    dropDownTitle={lang['_172']}
                />

                <SettingWithOptionItem
                    title={lang['_174']}
                    subtitle={lang['_175']}
                    type='SWITCH'
                />

                <SettingWithOptionItem
                    title={lang['_176']}
                    subtitle={lang['_177']}
                    type='BUTTON'
                    buttonTitle={lang['_176']}
                    buttonPress={() => setisDeleteMdalVisible(true)}
                />

            </Layout>

            <DeleteAccountModal
                isVisible={isDeleteMdalVisible}
                onClose={() => setisDeleteMdalVisible(false)}
            />
        </Layout>
    )
}

export default SecuritSettingScreen
