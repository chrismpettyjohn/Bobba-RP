import {EmulatorTexts} from '@instinct-prj/interface';
import {EmulatorTextsStruct} from './emulator-texts.types';

export function emulatorTextsWire(
  options: EmulatorTextsStruct[]
): EmulatorTexts {
  return options.map(_ => ({
    id: _.key,
    label: _.key,
    value: _.value,
  }));
}
