import {createFetchHook} from '@instinct-web/core';
import {RPRoom} from '@instinct-plugin/roleplay-types';
import {rpRoomService} from '../../services/rp-room';

export const useFetchAllRPRooms = (refresh = 0) =>
  createFetchHook<RPRoom[]>(rpRoomService.getAll, refresh);
