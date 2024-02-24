import { ReactNode } from "react";

export interface ISettingItem {
    id: number;
    title: string;
    subtle: string;
    icon: ReactNode;
    onPress: Function;
}