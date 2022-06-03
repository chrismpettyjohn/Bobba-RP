import {RPRoom} from '@bobba-rp/types';

export interface EditRoomModalProps {
  rpRoom: RPRoom;
  onChange(): void;
}
