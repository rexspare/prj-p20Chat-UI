import { View, Text } from 'react-native'
import React from 'react'
import Root from './src/navigation/root'
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <>
      <MenuProvider>
        <Root />
      </MenuProvider>
    </>
  )
}

export default App