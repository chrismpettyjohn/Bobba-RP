import {EmulatorSettings} from '@instinct-prj/interface';
import {EmulatorSettingsStruct} from './emulator-settings.types';

export function emulatorSettingsWire(
  options: EmulatorSettingsStruct[]
): EmulatorSettings {
  return options.map(_ => ({
    id: _.key,
    label: _.key,
    value: _.value,
  }));
}
