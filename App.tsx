import { View, Text, Appearance } from 'react-native'
import React, { useEffect } from 'react'
import Root from './src/navigation/root'
import { MenuProvider } from 'react-native-popup-menu';
import { getItem } from './src/services/asyncStorage';
import { ASYNC_KEYS, THEMES } from './src/assets/constants';
import useAppConfig from './src/hooks/AppConfig';
import { DarkTheme, LightTheme } from './src/assets/themes';
import TrackPlayer from 'react-native-track-player';

const App = () => {

  const { setActiveTheme, setTheme, activetheme } = useAppConfig()

  useEffect(() => {
    setupPlayer()
  }, [])

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer({
        waitForBuffer: true,
     });
    } catch (e) {
      console.log('Configure TrackPlayer:', e);
    }
  };

  useEffect(() => {
    getTheme()
  }, [])

  useEffect(() => {
    const subscription = Appearance.addChangeListener(async({ colorScheme }) => {
      const theme = await getItem(ASYNC_KEYS.ACTIVE_THEME, THEMES.LIGHT)

      setActiveTheme(theme)
      if (activetheme == THEMES.DEFAULT) {
        if (colorScheme == "light") {
          setTheme(LightTheme)
        } else {
          setTheme(DarkTheme)
        }
      }
    })
    return () => subscription.remove();
  }, [])

  const getTheme = async () => {
    try {
      const DEFAULT_THEME = await Appearance.getColorScheme() as "light" | "dark"

      const theme = await getItem(ASYNC_KEYS.ACTIVE_THEME, THEMES.LIGHT)
      setActiveTheme(theme)
      switch (theme) {
        case THEMES.DEFAULT:
          if (DEFAULT_THEME == 'light') {
            setTheme(LightTheme)
          } else {
            setTheme(DarkTheme)
          }
          break;
        case THEMES.LIGHT:
          setTheme(LightTheme)
          break;
        case THEMES.DARK:
          setTheme(DarkTheme)
          break;

        default:
          setTheme(LightTheme)
          break;
      }
    } catch (error) {

    }
  }


  return (
    <>
      <MenuProvider>
        <Root />
      </MenuProvider>
    </>
  )
}

export default App