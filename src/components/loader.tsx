import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React, { FC, useContext } from 'react'
import { COLORS } from '../assets/stylesGuide'
import useAppConfig from '../hooks/AppConfig';

interface loaderPorps {
    isLoading: boolean;
}


const Loader: FC<loaderPorps> = ({ isLoading }) => {
    const { theme } = useAppConfig()

    return (
        <Modal
            visible={isLoading}
            transparent
            style={{ flex: 1 }}
            onRequestClose={() => { }}
        >
            <View style={styles.main}>

                <View style={[styles.container, {
                    backgroundColor: theme.BACKGROUND,
                }]}>
                    <ActivityIndicator size={'large'} color={COLORS.PRIMARY} />
                </View>

            </View>

        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})