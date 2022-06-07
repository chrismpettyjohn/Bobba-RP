export interface SearchBarProps {
  defaultValue?: string;
  onSearch(value: string | number): Promise<SearchBarRow[]>;
  onSelect(value: SearchBarRow): void;
}

export interface SearchBarRow {
  label: string;
  value: string;
}
