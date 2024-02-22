import { create } from 'zustand';
import { COINSLIST, WALLET_LIST } from '../data';
import { createSelectors } from './common';


/**
 * State Structure
 */
export interface IWalletState {
    // State values
    walletList: any[];
    setwalletList: (val: any) => void;
    assetList: any[];
    setassetList: (val: any) => void;
    selectedAsset: any;
    setselectedAsset: (val: any) => void;
}

const initialState: IWalletState = {
    walletList: WALLET_LIST,
    setwalletList: () => { },
    assetList: COINSLIST,
    setassetList: () => { },
    selectedAsset: COINSLIST,
    setselectedAsset: () => { },
};

/**
 * State hook definition
 */
export const useWallet = create<IWalletState>((set, get) => ({
    ...initialState,
    setwalletList: val => set({ walletList: val }),
    setassetList: val => set({ assetList: val }),
    setselectedAsset: val => set({ selectedAsset: val }),
}));

/**
 * Selectors
 */
export const walletStateSelectors = createSelectors(initialState);
