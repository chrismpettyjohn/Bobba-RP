import {Column, Entity, PrimaryColumn} from 'typeorm';
import {EmulatorSettingsStruct} from './emulator-settings.types';

@Entity('emulator_settings')
export class ArcturusEmulatorSettingsEntity implements EmulatorSettingsStruct {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
