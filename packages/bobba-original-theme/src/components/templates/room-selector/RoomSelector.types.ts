import {RPRoom} from '@instinct-plugin/bobba-rp-types';

export interface RoomSelectorProps {
  rooms: RPRoom[];
  roomID?: number;
  onChange(newRoom: RPRoom): void;
}
