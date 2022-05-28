import React, {useContext, useEffect} from 'react';
import {setURL, themeContext} from '@instinct-web/core';

setURL('play', <Play />);

export function Play() {
  const {showClient, setStore} = useContext(themeContext);

  useEffect(() => {
    if (!showClient) setStore({showClient: true});
  }, [showClient]);

  return null;
}
