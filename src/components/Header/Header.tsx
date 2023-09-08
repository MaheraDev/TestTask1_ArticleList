import React from 'react';
import {HeaderIcon} from './HeaderIcon';

import {Images} from '../../images/images';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

const {bluetooth, radio, cloud} = Images;
const buttons = [
  {content: 'Cancel', color: 'blue'},
  {content: 'Articles In Carton', color: 'black'},
  {content: 'Confirm', color: 'blue'},
];

export const Header = () => {
  return (
    <StyledViewComp padding="20px" width="100%">
      <StyledViewComp flexDirection="row" justifyContent="space-between">
        <StyledViewComp
          alignSelf="flex-start"
          height="60px"
          flexDirection="row"
          alignItems="center">
          <HeaderIcon icon={bluetooth} />
          <StyledTextComp fontSize="20px">100%</StyledTextComp>
        </StyledViewComp>
        <HeaderIcon icon={radio} />
        <HeaderIcon icon={cloud} />
      </StyledViewComp>
      <StyledViewComp
        flexDirection="row"
        justifyContent="space-between"
        marginTop="10px">
        {buttons.map(buttonOptions => {
          const {content, color} = buttonOptions;
          return (
            <StyledTextComp
              key={content}
              color={color}
              fontSize="18px"
              fontWeight="500"
            >
              {content}
            </StyledTextComp>
          );
        })}
      </StyledViewComp>
    </StyledViewComp>
  );
};
