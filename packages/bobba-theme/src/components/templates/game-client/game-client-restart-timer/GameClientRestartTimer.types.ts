import {ReactNode} from 'react';

export interface GameClientRestartTimerProps {
  children: ReactNode;
  className?: string;
  onComplete?: () => void;
  style?: object;
}
