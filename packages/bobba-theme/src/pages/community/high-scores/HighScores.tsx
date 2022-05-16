import React from 'react';
import {setURL} from '@instinct-web/core';
import {CommunityLayout} from '../CommunityLayoutProps';

setURL('community/high-scores', <HighScores />);

export function HighScores() {
  return <CommunityLayout>High Scores</CommunityLayout>;
}
