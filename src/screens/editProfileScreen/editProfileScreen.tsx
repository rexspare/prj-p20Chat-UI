import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Image, StatusBar, TextInput, View } from 'react-native'
import { AboutIcon, CameraIcon, EditIcon, PhoneIcon, UserIcon } from '../../assets/icons'
import { FRIENDS_AVATARS } from '../../assets/images'
import { COLORS, hp } from '../../assets/stylesGuide'
import { AppHeader, BodyText, Layout, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import SIcon from 'react-native-vector-icons/SimpleLineIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'

const EditProfileScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()

    const styles = styles_(theme)

    const nameRef = useRef<TextInput>(null);
    const phoneRef = useRef<TextInput>(null);
    const bioRef = useRef<TextInput>(null);

    const [name, setname] = useState("Simonbrooke")
    const [phone, setphone] = useState('+23 123 4567 890')
    const [bio, setbio] = useState("Just living some life, you see")
    const [editableField, seteditableField] = useState<string | null>(null)

    return (
        <>
            <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
            <Layout fixed={true} containerStyle={styles.main}>


                <AppHeader
                    title={lang['_133']}
                />

                <Layout
                    fixed={true}
                    containerStyle={styles.container}
                >

                    {/* IMAGE AVATAR */}
                    <View style={styles.avatarContainer} >

                        <Image
                            source={FRIENDS_AVATARS.P3}
                            style={styles.avatar}
                        />

                        <View style={styles.camIcon}>
                            <CameraIcon width={hp(5.3)} height={hp(5.3)} />
                        </View>

                    </View>

                    <Layout containerStyle={{ flex: 1 }}>
                        {/* NAME FIELD */}

                        <View style={styles.inpitContainer}>
                            <View style={styles.iconContainer}>
                                <FIcon
                                    name='user-o'
                                    color={theme.BLACK_TO_WHITE}
                                    size={hp(2.36)}
                                />
                            </View>

                            <TextInput
                                ref={nameRef}
                                style={styles.input}
                                value={name}
                                onChangeText={(txt: string) => setname(txt)}
                                editable={editableField == 'name'}
                            />

                            <TouchableCustom
                                style={styles.editBtn}
                                onPress={() => {
                                    editableField == 'name' ?
                                        seteditableField(null) :
                                        seteditableField('name')
                                }}
                            >
                                {
                                    editableField == 'name' ?
                                        <MIcon
                                            name='done-outline'
                                            color={COLORS.SECONDARY}
                                            size={hp(2.36)}
                                        />
                                        :
                                        <EditIcon
                                            width={hp(2.14)}
                                            height={hp(2.14)}
                                        />
                                }
                            </TouchableCustom>
                        </View>


                        {/* PHONE FIELD */}
                        <View style={styles.inpitContainer}>
                            <View style={styles.iconContainer}>
                                <SIcon
                                    name='phone'
                                    color={theme.BLACK_TO_WHITE}
                                    size={hp(2.36)}
                                />
                            </View>


                            <View style={styles.input}>
                                <BodyText style={styles.txt}>{lang['_134']}</BodyText>
                                <TextInput
                                    ref={phoneRef}
                                    style={styles.input1}
                                    value={phone}
                                    onChangeText={(txt: string) => setphone(txt)}
                                    editable={editableField == 'phone'}
                                />
                            </View>

                            <TouchableCustom
                                style={styles.editBtn}
                                onPress={() => {
                                    editableField == 'phone' ?
                                        seteditableField(null) :
                                        seteditableField('phone')
                                }}
                            >
                                {
                                    editableField == 'phone' ?
                                        <MIcon
                                            name='done-outline'
                                            color={COLORS.SECONDARY}
                                            size={hp(2.36)}
                                        />
                                        :
                                        <EditIcon
                                            width={hp(2.14)}
                                            height={hp(2.14)}
                                        />
                                }
                            </TouchableCustom>
                        </View>

                        {/* BIO FIELD */}
                        <View style={styles.inpitContainer}>
                            <View style={styles.iconContainer}>
                                <AboutIcon
                                    fill={theme.BLACK_TO_WHITE}
                                    width={hp(2.57)}
                                    height={hp(2.57)}
                                />
                            </View>

                            <View style={styles.input}>
                                <BodyText style={styles.txt}>{lang['_135']}</BodyText>
                                <TextInput
                                    ref={bioRef}
                                    style={styles.input1}
                                    value={bio}
                                    onChangeText={(txt: string) => setbio(txt)}
                                    editable={editableField == 'bio'}
                                />
                            </View>

                            <TouchableCustom
                                style={styles.editBtn}
                                onPress={() => {
                                    editableField == 'bio' ?
                                        seteditableField(null) :
                                        seteditableField('bio')
                                }}
                            >
                                {
                                    editableField == 'bio' ?
                                        <MIcon
                                            name='done-outline'
                                            color={COLORS.SECONDARY}
                                            size={hp(2.36)}
                                        />
                                        :
                                        <EditIcon
                                            width={hp(2.14)}
                                            height={hp(2.14)}
                                        />
                                }
                            </TouchableCustom>
                        </View>

                    </Layout>

                </Layout>

            </Layout>
        </>
    )
}


export default EditProfileScreen
