import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import {
    If,
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
import { SCREENS } from '../../assets/constants'


const ContactSettingScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isAdding, setisAdding] = useState(false)
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [memo, setmemo] = useState('')


    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_195']}
            />

            <Layout containerStyle={{ paddingHorizontal: '4%', }}>
                <If condition={isAdding}>
                    <PrimaryInput
                        title={lang['_197']}
                        titleStyles={styles.titleStyles}
                        value={name}
                        onChange={(txt) => setname(txt)}
                    />

                    <PrimaryInput
                        title={lang['_198']}
                        titleStyles={styles.titleStyles}
                        value={address}
                        onChange={(txt) => setaddress(txt)}
                    />

                    <PrimaryInput
                        title={lang['_199']}
                        titleStyles={styles.titleStyles}
                        value={memo}
                        onChange={(txt) => setmemo(txt)}
                    />

                </If>

                <If condition={!isAdding}>
                    {
                        [{ title: "Contact Name" }, { title: "Contact Name" }].map((item, index) => (
                            <NetworkItem
                                key={index}
                                item={item}
                                index={index}
                                hideButton={true}
                            />
                        ))
                    }
                </If>

            </Layout>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <PrimaryButton
                    title={lang['_196']}
                    onPress={() => setisAdding(!isAdding)}
                    filled={true}
                />

            </View>
        </Layout>
    )
}

export default ContactSettingScreen
