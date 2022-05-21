import {Column, Entity, PrimaryColumn} from 'typeorm';
import {EmulatorTextsStruct} from './emulator-texts.types';

@Entity('server_locale')
export class HoloEmulatorTextsEntity implements EmulatorTextsStruct {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
