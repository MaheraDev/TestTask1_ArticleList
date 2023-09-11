import {FlatList} from 'react-native';
import React from 'react';

import {ArticlesListItem} from './ArticlesListItem';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {useAppSelector} from '../../redux/hooks';

const separator = () => <StyledViewComp height="1px" backgroundColor="grey" />;
export const ArticlesList = () => {
  const articlesList = useAppSelector(state => state.articlesList);
  console.log(articlesList);
  return (
    <StyledViewComp width="100%">
      <FlatList
        data={articlesList}
        renderItem={({item}) => <ArticlesListItem data={item} />}
        keyExtractor={item => item.code}
        ItemSeparatorComponent={separator}
      />
    </StyledViewComp>
  );
};
