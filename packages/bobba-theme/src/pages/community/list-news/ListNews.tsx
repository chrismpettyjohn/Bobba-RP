import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {exampleArticle} from '@instinct-prj/interface';
import {CommunityLayout} from '../CommunityLayoutProps';
import {ArticleListingCard} from '../../../components/article-listing-card/ArticleListingCard';
import {SearchFilters} from '../../../components/search-filters/SearchFilters';

setURL('community/news', <ListNews />);

export function ListNews() {
  const getSearchFilters = () => {
    return (
      <>
        <SearchFilters
          filters={[
            {
              type: 'select',
              label: 'Category',
              options: [],
            },
            {
              type: 'select',
              label: 'Author',
              options: [],
            },
            {
              type: 'select',
              label: 'Posted At',
              options: [],
            },
          ]}
        />
        <div style={{height: 15, width: '100%'}} />
      </>
    );
  };

  return (
    <CommunityLayout header={getSearchFilters()} results={1}>
      <div className="cards" data-v-581a1f10="">
        <Link to="/community/news/1">
          <span style={{display: 'contents'}}>
            <ArticleListingCard
              article={{
                ...exampleArticle,
                thumbnailImage:
                  'https://images.habbo.com/web_images/habbo-web-articles/lpromo_Android_2022_Launch1_thumb.png',
              }}
            />
          </span>
        </Link>
      </div>
    </CommunityLayout>
  );
}
