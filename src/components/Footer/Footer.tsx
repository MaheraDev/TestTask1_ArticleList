import React, {FC} from 'react';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

export const Footer: FC = () => {
  return (
    <StyledViewComp
      height="90px"
      position="absolute"
      bottom="20px"
      left="0"
      right="0"
      backgroundColor="#fff"
      justifyContent="center"
      alignItems="center">
      <StyledButtonComp
        justifyContent="center"
        borderWidth="1px"
        borderRadius="5px"
        borderColor="rgb(45, 61, 166)"
        padding="20px">
        <StyledTextComp
          fontSize="16px"
          color="rgb(45, 61, 166)"
          letterSpacing="1px">
          Pull the trigger to start reading.
        </StyledTextComp>
      </StyledButtonComp>
    </StyledViewComp>
  );
};
