import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import React, {FC} from 'react';
import {Pressable} from 'react-native';

type Props = {
  handleDeleteItem: () => void;
};
export const DeleteItemPanel: FC<Props> = props => {
  const {handleDeleteItem} = props;
  return (
    <StyledViewComp
      flexDirection={'row'}
      flex={'1'}
      alignItems={'center'}
      padding={'10px'}
      backgroundColor={'#818181'}>
      <StyledViewComp flex={'1'}>
        <StyledTextComp color={'#fcfcfc'} fontWeight={'bold'}>
          Are you sure?
        </StyledTextComp>
      </StyledViewComp>
      <StyledViewComp>
        <Pressable
          onPress={() => {
            handleDeleteItem();
          }}>
          <StyledTextComp color={'#fcfcfc'} fontWeight={'bold'}>
            Delete
          </StyledTextComp>
        </Pressable>
      </StyledViewComp>
    </StyledViewComp>
  );
};
