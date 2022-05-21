import {databaseType} from '../../database.const';
import {HoloEmulatorSettingsEntity} from './emulator-settings.holo.entity';
import {ArcturusEmulatorSettingsEntity} from './emulator-settings.arcturus.entity';

export const EmulatorSettingsEntity =
  databaseType === 'holo'
    ? HoloEmulatorSettingsEntity
    : ArcturusEmulatorSettingsEntity;
