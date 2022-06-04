import {Module} from '@nestjs/common';
import {RPProfileModule} from './rp-profile';
import {UserHighScoreModule} from './high-score/high-score.module';
import {SearchUsersModule} from './search-users/search-users.module';
import {PhotosByUserModule} from './photos-by-user/photos-by-user.module';

@Module({
  imports: [
    UserHighScoreModule,
    RPProfileModule,
    PhotosByUserModule,
    SearchUsersModule,
  ],
  exports: [
    UserHighScoreModule,
    RPProfileModule,
    PhotosByUserModule,
    SearchUsersModule,
  ],
})
export class FeatureModule {}
