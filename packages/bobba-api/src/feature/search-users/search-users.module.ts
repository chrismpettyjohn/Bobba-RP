import {Module} from '@nestjs/common';
import {RPUserModule} from '../../user/user.module';
import {DatabaseModule} from '../../database/database.module';
import {SearchUsersController} from './search-users.controller';

@Module({
  imports: [DatabaseModule, RPUserModule],
  controllers: [SearchUsersController],
})
export class SearchUsersModule {}
