import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';
import { DarkTheme, LightTheme } from '../assets/themes';
import { ITHEME } from '../models/config';
import { Platform } from 'react-native';
import { CHAT_FONT_SIZE, THEMES } from '../assets/constants';

/**
 * State Structure
 */
export interface IConfigState {
    // State values
    lang: any;
    setLang: (val: any) => void;
    theme: ITHEME;
    setTheme: (val: any) => void;
    activetheme: THEMES.DARK | THEMES.DEFAULT | THEMES.LIGHT;
    setActiveTheme: (val: any) => void;
    chatFontSize: CHAT_FONT_SIZE.SMALL | CHAT_FONT_SIZE.MEDIUM | CHAT_FONT_SIZE.LARGE
    setChatFontSize: (val: any) => void;
    defalutDeviceTheme: string;
    setdefalutDeviceTheme: (val: any) => void;
}

const initialState: IConfigState = {
    lang: English,
    setLang: () => { },
    theme: LightTheme,
    setTheme: () => { },
    activetheme: THEMES.LIGHT,
    setActiveTheme: () => { },
    chatFontSize: CHAT_FONT_SIZE.MEDIUM,
    setChatFontSize: () => { },
    defalutDeviceTheme: 'dark',
    setdefalutDeviceTheme: () => { }
};

/**
 * State hook definition
 */
export const useConfig = create<IConfigState>((set, get) => ({
    ...initialState,
    setLang: val => set({ lang: val }),
    setTheme: val => set({ theme: val }),
    setActiveTheme: val => set({ activetheme: val }),
    setChatFontSize: val => set({ chatFontSize: val }),

}));

/**
 * Selectors
 */
export const configStateSelectors = createSelectors(initialState);
