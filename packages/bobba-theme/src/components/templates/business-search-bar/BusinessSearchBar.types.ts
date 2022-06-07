import {Business} from '@bobba-rp/types';
import {SearchBarRow} from '../../generic/search-bar/SearchBar.types';

export interface BusinessSearchBarProps {
  business?: Business;
  onSelectBusiness(newBusiness: SearchBarRow): void;
}
