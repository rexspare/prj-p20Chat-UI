import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';
import { DarkTheme, LightTheme } from '../assets/themes';
import { ITHEME } from '../models/config';
import { Platform } from 'react-native';


/**
 * State Structure
 */
export interface INewsState {
    // State values
    news: any;
    setNews: (val: any) => void;
    selectedNews: any;
    setselectedNews: (val: any) => void;

}

const initialState: INewsState = {
    news: [],
    setNews: () => { },
    selectedNews: null,
    setselectedNews: () => { },
};

/**
 * State hook definition
 */
export const useNews = create<INewsState>((set, get) => ({
    ...initialState,
    setNews: val => set({ news: val }),
    setselectedNews: val => set({ selectedNews: val }),
}));

/**
 * Selectors
 */
export const newsStateSelectors = createSelectors(initialState);
