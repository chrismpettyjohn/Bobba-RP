import {RPRoom} from '@bobba-rp/types';

export interface RoomSelectorProps {
  rooms: RPRoom[];
  roomID?: number;
  onChange(newRoom: RPRoom): void;
}
