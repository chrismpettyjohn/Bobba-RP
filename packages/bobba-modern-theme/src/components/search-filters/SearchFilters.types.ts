import {ReactNode} from 'react';

export interface SearchFiltersProps {
  filters: SearchFilter[];
}

export type SearchFilter = SelectSearchFilterProps;

export interface SelectSearchFilterProps {
  type: 'select';
  label: ReactNode;
  options: Array<{label: ReactNode; value: string}>;
}
