import {ReactNode} from 'react';

export interface TabBarChild {
  path: string;
  text: ReactNode;
}

export interface TabBarProps {
  tabs: TabBarChild[];
}
