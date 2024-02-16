import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    Layout,
    PrimaryHeader,
    ResetAccountModal,
    SettingWithOptionItem
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'


const AdvancedSettingScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isResetModalVisible, setisResetModalVisible] = useState(false)

    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_122']}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%' }}>

                <SettingWithOptionItem
                    title={lang['_148']}
                    subtitle={lang['_149']}
                    type='BUTTON'
                    buttonTitle={lang['_148']}
                    buttonPress={() => setisResetModalVisible(true)}
                />

                <SettingWithOptionItem
                    title={lang['_150']}
                    subtitle={lang['_151']}
                    type='SWITCH'
                />

                <SettingWithOptionItem
                    title={lang['_152']}
                    subtitle={lang['_153']}
                    type='SWITCH'
                />

                <SettingWithOptionItem
                    title={lang['_154']}
                    subtitle={lang['_155']}
                    type='SWITCH'
                />

                <SettingWithOptionItem
                    title={lang['_156']}
                    subtitle={lang['_157']}
                    type='SWITCH'
                />

                <SettingWithOptionItem
                    title={lang['_158']}
                    subtitle={lang['_159']}
                    type='BUTTON'
                    buttonTitle={lang['_160']}
                />

       

            </Layout>
            <ResetAccountModal
                isVisible={isResetModalVisible}
                onClose={() => setisResetModalVisible(false)}
            />

        
        </Layout>
    )
}

export default AdvancedSettingScreen
