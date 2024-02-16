import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import {
    Layout,
    NetworkItem,
    NetworkModal,
    PrimaryButton,
    PrimaryHeader,
    PrimaryInput
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { SearchIcon } from '../../assets/icons'


const NetworkSettingScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [search, setsearch] = useState('')
    const [isNetModalVisible, setisNetModalVisible] = useState<boolean>(false)


    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_192']}
            />

            <PrimaryInput
                hideTitle={true}
                titleStyles={styles.titleStyles}
                value={search}
                placeholder={lang['_193']}
                onChange={(txt) => setsearch(txt)}
                renderLeftIcon={<SearchIcon />}
                containerStyles={{ width: '92%' }}
            />

            <Layout containerStyle={{ paddingHorizontal: '4%', }}>



                {
                    [{}, {}, {}, {}].map((item, index) => (
                        <NetworkItem
                            key={index}
                            item={item}
                            index={index}
                            hideButton={true}
                        />
                    ))
                }

            </Layout>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <PrimaryButton
                    title={lang['_194']}
                    onPress={() => setisNetModalVisible(true)}
                    filled={true}
                />

            </View>

            <NetworkModal
                isVisible={isNetModalVisible}
                onClose={() => setisNetModalVisible(false)}
            />
        </Layout>
    )
}

export default NetworkSettingScreen
