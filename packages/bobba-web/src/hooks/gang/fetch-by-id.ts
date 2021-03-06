import {useEffect, useState} from 'react';
import {Gang} from '@bobba-rp/types';
import {gangService} from '../../services/gang';

export function useFetchGangByID(gangID: string): Gang | undefined {
  const [gang, setGang] = useState<Gang>();

  useEffect(() => {
    async function fetchGang() {
      setGang(undefined);
      const data = await gangService.getByID(gangID);
      setGang(data);
    }

    fetchGang();
  }, [gangID]);

  return gang;
}
