import { create } from 'zustand'
import { createSelectors } from './common';

/**
 * State Structure
 */
export interface IAppState {
  // State values
  isAuthenticated: boolean;
  user: any;
  setAuthenticated: (status: boolean, accessToken?: string) => void;
  setUser: (item: any) => void;
  accessToken: string;
  isLoaderVisible: boolean;
  toggleLoader: (val: boolean) => void;
}

const initialState: IAppState = {
  user: {},
  isAuthenticated: false,
  setAuthenticated: () => { },
  setUser: () => { },
  accessToken: '',
  isLoaderVisible: false,
  toggleLoader: () => { }
};

/**
 * State hook definition
 */
export const useApp = create<IAppState>((set, get) => ({
  ...initialState,
  setAuthenticated: (status, token) =>
    set({ isAuthenticated: status, accessToken: token ?? '' }),
  setUser: item => set({ user: item }),
  toggleLoader: (val: boolean) => set({ isLoaderVisible: val }),
}));

/**
 * Selectors
 */
export const appStateSelectors = createSelectors(initialState);
