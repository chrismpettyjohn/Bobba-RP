import {createFetchHook} from '@instinct-web/core';
import {UserHighScores} from '@instinct-plugin/roleplay-types';
import {highScoreService} from '../../services/high-score';

export const useFetchTopUsers = () =>
  createFetchHook<UserHighScores>(highScoreService.getTopUsers);
