import {GangHighScores, UserHighScores} from '@bobba-rp/types';

export interface HighScoreService {
  getTopUsers(): Promise<UserHighScores>;
  getTopGangs(): Promise<GangHighScores>;
}
