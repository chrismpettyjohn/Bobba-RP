import {Property} from '@bobba-rp/types';

export interface EditPropertyModalProps {
  property: Property;
  onChange(): void;
}
