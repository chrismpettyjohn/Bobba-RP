import {Module, CacheModule} from '@nestjs/common';
import {CrimePipe} from './crime.pipe';
import {CrimeController} from './crime.controller';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule, CacheModule.register()],
  controllers: [CrimeController],
  providers: [CrimePipe],
  exports: [CrimePipe],
})
export class CrimeModule {}
