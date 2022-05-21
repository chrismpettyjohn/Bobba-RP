import {Column, Entity, PrimaryColumn} from 'typeorm';
import {EmulatorSettingsStruct} from './emulator-settings.types';

@Entity('server_settings')
export class HoloEmulatorSettingsEntity implements EmulatorSettingsStruct {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
