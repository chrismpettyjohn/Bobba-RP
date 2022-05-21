import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {EmulatorTextsEntity} from './emulator-texts.entity';
import {EmulatorTextsStruct} from './emulator-texts.types';

@Injectable()
export class EmulatorTextsRepository extends BaseRepository<EmulatorTextsStruct> {
  constructor(
    @InjectRepository(EmulatorTextsEntity)
    emulatorTextsRepo: Repository<EmulatorTextsStruct>
  ) {
    super(emulatorTextsRepo, []);
  }
}
