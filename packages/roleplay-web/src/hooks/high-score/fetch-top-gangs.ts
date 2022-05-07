import {createFetchHook} from '@instinct-web/core';
import {GangHighScores} from '@instinct-plugin/bobba-rp-types';
import {highScoreService} from '../../services/high-score';

export const useFetchTopGangs = () =>
  createFetchHook<GangHighScores>(highScoreService.getTopGangs);
