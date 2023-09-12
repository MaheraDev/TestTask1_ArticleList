import React from 'react';
import Bluetooth from '../../images/Header/Bluetouth.svg';
import Cloud from '../../images/Header/Cloud.svg';
import Radio from '../../images/Header/Radio.svg';

import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

// const {bluetooth, radio, cloud} = Images;
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
          alignSelf={'flex-start'}
          height={'60px'}
          flexDirection={'row'}
          alignItems={'center'}>
          <Bluetooth />
          <StyledTextComp fontSize={'20px'}>100%</StyledTextComp>
        </StyledViewComp>
        <Radio />
        <Cloud />
      </StyledViewComp>
      <StyledViewComp
        flexDirection={'row'}
        justifyContent={'space-between'}
        marginTop={'10px'}>
        {buttons.map(buttonOptions => {
          const {content, color} = buttonOptions;
          return (
            <StyledTextComp
              key={content}
              color={color}
              fontSize={'18px'}
              fontWeight={'500'}>
              {content}
            </StyledTextComp>
          );
        })}
      </StyledViewComp>
    </StyledViewComp>
  );
};
