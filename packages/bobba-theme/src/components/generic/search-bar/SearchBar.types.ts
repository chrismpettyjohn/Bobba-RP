export interface SearchBarProps {
  defaultValue?: string | number;
  onSearch(value: string | number): Promise<SearchBarRow[]> | SearchBarRow[];
  onSelect(value: SearchBarRow): void;
}

export interface SearchBarRow {
  label: string;
  value: string | number;
}
