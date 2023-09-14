import {Image} from 'react-native';
import React, {FC} from 'react';
import {ArticleData} from '../../types/ArticlesData';
import {TextContent} from './TextContent';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledSwipeableComp} from '../SimpleComponents/StyledSwipeableComp';
import {useAppDispatch} from '../../redux/hooks';
import {removeArticle} from '../../redux/ArticlesListSlice';

type Props = {
  data: ArticleData;
};
export const ArticlesListItem: FC<Props> = ({data}) => {
  const {image, size, color, title, code} = data;
  const textContent = {code, color, size, title};

  const dispatch = useAppDispatch();
  const handleDeleteArticle = (c: string) => {
    dispatch(removeArticle(c));
  };
  return (
    <StyledSwipeableComp
      articleCode={code}
      handleDeleteArticle={() => handleDeleteArticle(code)}>
      <StyledViewComp
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent="space-between"
        padding={'15px'}>
        <Image source={image} />
        <TextContent content={textContent} />
        <StyledButtonComp
          width={'100px'}
          borderRadius={'10px'}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={'green'}>
          <StyledTextComp color="white" fontWeight="700">
            3
          </StyledTextComp>
        </StyledButtonComp>
        <StyledTextComp>{'>'}</StyledTextComp>
      </StyledViewComp>
    </StyledSwipeableComp>
  );
};
