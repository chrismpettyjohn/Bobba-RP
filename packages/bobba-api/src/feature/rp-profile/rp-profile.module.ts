import {Module, CacheModule} from '@nestjs/common';
import {RPUserModule} from '../../user/user.module';
import {RpProfileController} from './rp-profile.controller';
import {DatabaseModule} from '../../database/database.module';

@Module({
  imports: [DatabaseModule, RPUserModule, CacheModule.register()],
  controllers: [RpProfileController],
})
export class RPProfileModule {}
