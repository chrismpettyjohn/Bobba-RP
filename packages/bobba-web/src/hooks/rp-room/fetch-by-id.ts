import {useEffect, useState} from 'react';
import {RPRoom} from '@bobba-rp/types';
import {rpRoomService} from '../../services/rp-room';

export function useFetchRPRoomByID(rpRoomID: string): RPRoom | undefined {
  const [rpRoom, setRPRoom] = useState<RPRoom>();

  useEffect(() => {
    async function fetchCrime() {
      setRPRoom(undefined);
      const data = await rpRoomService.getByID(rpRoomID);
      setRPRoom(data);
    }

    fetchCrime();
  }, [rpRoomID]);

  return rpRoom;
}
