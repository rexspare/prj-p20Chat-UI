import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { ChatSettingIcon, ThemeIcon } from '../../assets/icons'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, ContactItem, Layout } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'
import { CHATS_LIST } from '../../data'
import { UnblockUserModal } from '../../components/popups'

const BlockedContactScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const data = [...CHATS_LIST]

    const [isModalVisible, setisModalVisible] = useState(false)
    const [selected, setselected] = useState<any>(null)

    const handleUnblock = (user: any) => {
        setselected(user)
        setisModalVisible(true)
    }


    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_169']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />

            <Layout
                fixed={true}>
                <FlatList
                    data={data.slice(0, 4)}
                    renderItem={({ item, index }) => (
                        <ContactItem
                            item={item}
                            onPress={(user: any) => handleUnblock(user)}
                        />)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                />

            </Layout>

            <UnblockUserModal
                isVisible={isModalVisible}
                onClose={() => setisModalVisible(false)}
                user={selected}
            />

        </Layout>
    )
}

export default BlockedContactScreen