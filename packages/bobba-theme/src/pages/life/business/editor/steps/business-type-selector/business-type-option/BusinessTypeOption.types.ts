import {BusinessType} from '@bobba-rp/types';

export interface BusinessTypeOptionProps {
  businessType: BusinessType;
  selected?: boolean;
  onClick?(): void;
}
