import {RPRoom} from '@instinct-plugin/bobba-rp-types';

export interface EditRoomModalProps {
  rpRoom: RPRoom;
  onChange(): void;
}
