import React from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

export const ListTitle = () => {
  return (
    <StyledViewComp
      flexDirection="row"
      padding="15px 80px 15px 20px"
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderColor="gray">
      <StyledTextComp color="gray">ARTICLE</StyledTextComp>
      <StyledTextComp color="gray">ACT</StyledTextComp>
    </StyledViewComp>
  );
};
