import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {EmulatorSettingsEntity} from './emulator-settings.entity';
import {EmulatorSettingsStruct} from './emulator-settings.types';

@Injectable()
export class EmulatorSettingsRepository extends BaseRepository<EmulatorSettingsStruct> {
  constructor(
    @InjectRepository(EmulatorSettingsEntity)
    emulatorSettingsRepo: Repository<EmulatorSettingsStruct>
  ) {
    super(emulatorSettingsRepo, []);
  }
}
