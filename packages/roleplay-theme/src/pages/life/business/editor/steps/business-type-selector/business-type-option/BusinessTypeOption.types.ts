import {BusinessType} from '@instinct-plugin/bobba-rp-types';

export interface BusinessTypeOptionProps {
  businessType: BusinessType;
  selected?: boolean;
  onClick?(): void;
}
