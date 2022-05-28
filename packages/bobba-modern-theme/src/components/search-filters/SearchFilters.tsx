import React from 'react';
import {SearchFiltersProps} from './SearchFilters.types';
import {SelectSearchFilter} from './filters/SelectSearchFilter';

export function SearchFilters({filters}: SearchFiltersProps) {
  return (
    <div style={{width: '100%'}}>
      <div className="filters" data-v-11b1ccfe="" data-v-37a7da9c="">
        <div className="scroll" data-v-11b1ccfe="">
          <div className="row row1 flex" data-v-11b1ccfe="">
            {filters.map((filter, filterIndex) => {
              if (filter.type === 'select') {
                return (
                  <SelectSearchFilter
                    {...filter}
                    key={`select_search_${filterIndex}`}
                  />
                );
              }

              throw new Error('Invalid filter');
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
