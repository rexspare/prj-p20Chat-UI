import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView, VibrancyView } from '@react-native-community/blur';
import { hp, COMMON_STYLES, wp } from '../assets/stylesGuide';

const BlurContainer = () => {
  return (
    < View style={styles.container} >
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={6}
        reducedTransparencyFallbackColor="white"
      />
    </View >

  )
}

export default BlurContainer

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  camera: {
    width: '100%',
    height: '100%'
  },
  container: {
    width: wp(100),
    height: 200,
    borderWidth: 2,
    position: 'absolute',
    bottom: 0,
  },
  row: {
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})