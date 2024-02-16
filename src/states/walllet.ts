import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';


/**
 * State Structure
 */
export interface IWallet {
    // State values
    selectedToken: any;
    setSelectedToken: (val: any) => void;
    selectedAccount: any;
    setSelectedAccount: (val: any) => void;
}

const initialState: IWallet = {
    selectedToken: {},
    setSelectedToken: () => { },
    selectedAccount: { id: 1, name: "Account 1" },
    setSelectedAccount: () => { },
};

/**
 * State hook definition
 */
export const useWallet = create<IWallet>((set, get) => ({
    ...initialState,
    setSelectedToken: val => set({ selectedToken: val }),
    setSelectedAccount: val => set({ selectedAccount: val }),
}));

/**
 * Selectors
 */
export const walletStateSelectors = createSelectors(initialState);
