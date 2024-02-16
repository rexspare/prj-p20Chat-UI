import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';


/**
 * State Structure
 */
export interface IConfigState {
    // State values
    lang: any;
    setLang: (val: any) => void;
}

const initialState: IConfigState = {
    lang: English,
    setLang: () => { },
};

/**
 * State hook definition
 */
export const useConfig = create<IConfigState>((set, get) => ({
    ...initialState,
    setLang: val => set({ lang: val }),
}));

/**
 * Selectors
 */
export const configStateSelectors = createSelectors(initialState);
