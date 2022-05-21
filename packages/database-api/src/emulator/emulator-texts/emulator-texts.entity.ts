import {databaseType} from '../../database.const';
import {HoloEmulatorTextsEntity} from './emulator-texts.holo.entity';
import {ArcturusEmulatorTextsEntity} from './emulator-texts.arcturus.entity';

export const EmulatorTextsEntity =
  databaseType === 'holo'
    ? HoloEmulatorTextsEntity
    : ArcturusEmulatorTextsEntity;
