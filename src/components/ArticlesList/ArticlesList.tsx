import {FlatList} from 'react-native';
import React from 'react';

import {ArticlesListItem} from './ArticlesListItem';
import {data} from './ArticleData';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';

const separator = () => <StyledViewComp height="1px" backgroundColor="grey" />;
export const ArticlesList = () => {
  return (
    <StyledViewComp width="100%">
      <FlatList
        data={data}
        renderItem={({item}) => <ArticlesListItem data={item} />}
        keyExtractor={item => item.code}
        ItemSeparatorComponent={separator}
      />
    </StyledViewComp>
  );
};
