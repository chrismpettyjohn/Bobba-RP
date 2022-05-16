import {ReactNode} from 'react';

export interface TabBarChild {
  path: string;
  icon?: string;
  text: ReactNode;
}

export interface TabBarProps {
  tabs: TabBarChild[];
  results?: number;
}
