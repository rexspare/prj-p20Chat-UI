import { create } from 'zustand'
import { createSelectors } from './common';
import { English } from '../assets/languages';
import { DarkTheme, LightTheme } from '../assets/themes';
import { ITHEME } from '../models/config';
import { CHATS_LIST } from '../data';


/**
 * State Structure
 */
export interface IInboxState {
    // State values
    chatList: any;
    setchatList: (val: any) => void;
    filteredChatList: any;
    setfilteredChatList: (val: any) => void;
    openedChat: any;
    setopenedChat: (val: any) => void;
    selectedChats: any[];
    setselectedChats: (val: any) => void;
    newMessage: any;
    setnewMessage: (val: any) => void;
    selectedConatct: any;
    setselectedConatct: (val: any) => void;
}

const initialState: IInboxState = {
    chatList: CHATS_LIST,
    setchatList: () => { },
    filteredChatList: CHATS_LIST,
    setfilteredChatList: () => { },
    openedChat: null,
    setopenedChat: () => { },
    selectedChats: [],
    setselectedChats: () => { },
    newMessage: { text: "" },
    setnewMessage: () => { },
    selectedConatct: null,
    setselectedConatct: () => { },
};

/**
 * State hook definition
 */
export const useInbox = create<IInboxState>((set, get) => ({
    ...initialState,
    setchatList: val => set({ chatList: val }),
    setfilteredChatList: val => set({ filteredChatList: val }),
    setopenedChat: val => set({ openedChat: val }),
    setselectedChats: val => set({ selectedChats: val }),
    setnewMessage: val => set({ newMessage: val }),
    setselectedConatct: val => set({ selectedConatct: val }),
}));

/**
 * Selectors
 */
export const inboxStateSelectors = createSelectors(initialState);
