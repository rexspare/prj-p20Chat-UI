import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';
import { DarkTheme, LightTheme } from '../assets/themes';
import { ITHEME } from '../models/config';
import { Platform } from 'react-native';


/**
 * State Structure
 */
export interface IConfigState {
    // State values
    lang: any;
    setLang: (val: any) => void;
    theme: ITHEME;
    setTheme: (val: any) => void;
}

const initialState: IConfigState = {
    lang: English,
    setLang: () => { },
    theme: Platform.OS == 'ios' ? DarkTheme : LightTheme,
    setTheme: () => { },
};

/**
 * State hook definition
 */
export const useConfig = create<IConfigState>((set, get) => ({
    ...initialState,
    setLang: val => set({ lang: val }),
    setTheme: val => set({ theme: val }),
}));

/**
 * Selectors
 */
export const configStateSelectors = createSelectors(initialState);
