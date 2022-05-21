import {Column, Entity, PrimaryColumn} from 'typeorm';
import {EmulatorTextsStruct} from './emulator-texts.types';

@Entity('emulator_texts')
export class ArcturusEmulatorTextsEntity implements EmulatorTextsStruct {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
