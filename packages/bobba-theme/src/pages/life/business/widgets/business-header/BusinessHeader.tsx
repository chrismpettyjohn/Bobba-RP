import {useLocation} from 'wouter';
import React, {useContext} from 'react';
import {Business} from '@bobba-rp/types';
import {configContext, Skeleton} from '@instinct-web/core';
import {MiniJumbotron} from '../../../../../components/generic/mini-jumbotron/MiniJumbotron';
import {BusinessSearchBar} from '../../../../../components/templates/business-search-bar/BusinessSearchBar';

export function BusinessHeader({business}: {business?: Business}) {
  const [location, setLocation] = useLocation();
  const {config} = useContext(configContext);
  return (
    <MiniJumbotron>
      <div className="row">
        <div className="col-8">
          <BusinessSearchBar
            onSelectBusiness={e => setLocation(`/businesses/${business?.id}`)}
            business={business}
          />
          <p>{business?.desc ?? <Skeleton width={200} />}</p>
        </div>
        <div className="col-4 text-right">
          {business?.badge ? (
            <img
              src={`${config.swfBadgeURL}/${business.badge}.gif`}
              style={{marginTop: 10, height: 80}}
            />
          ) : (
            <Skeleton circle width={80} height={80} />
          )}
        </div>
      </div>
    </MiniJumbotron>
  );
}
