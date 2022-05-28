import {Property} from '@instinct-plugin/bobba-rp-types';

export interface EditPropertyModalProps {
  property: Property;
  onChange(): void;
}
