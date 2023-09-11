import React, {FC} from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Content = {
  code: string;
  color: string;
  size: string;
  title: string;
};

type Props = {
  content: Content;
};
export const TextContent: FC<Props> = ({content}) => {
  const {code, size, title, color} = content;
  return (
    <StyledViewComp gap="5px">
      <StyledTextComp>{code}</StyledTextComp>

      <StyledViewComp flexDirection="row">
        <StyledTextComp>{color}</StyledTextComp>
        <StyledTextComp margin="0 0 0 20px">{size}</StyledTextComp>
      </StyledViewComp>

      <StyledTextComp color="lightgray">{title}</StyledTextComp>
    </StyledViewComp>
  );
};
