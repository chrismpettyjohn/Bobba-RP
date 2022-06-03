import {createFetchHook} from '@instinct-web/core';
import {UserHighScores} from '@bobba-rp/types';
import {highScoreService} from '../../services/high-score';

export const useFetchTopUsers = () =>
  createFetchHook<UserHighScores>(highScoreService.getTopUsers);
