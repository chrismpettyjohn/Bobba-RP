import {GangHighScores, UserHighScores} from '@instinct-plugin/bobba-rp-types';

export interface HighScoreService {
  getTopUsers(): Promise<UserHighScores>;
  getTopGangs(): Promise<GangHighScores>;
}
