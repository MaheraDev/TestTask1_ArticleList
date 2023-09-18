import React from 'react';
import Bluetooth from '../../images/Header/Bluetooth.svg';
import Cloud from '../../images/Header/Cloud.svg';
import Radio from '../../images/Header/Radio.svg';

import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Props = {
  currentScreen: string;
};

export const Header: React.FC<Props> = ({currentScreen}) => {
  let backgroundColor;
  let buttonsColor;
  let isSummaryScreen: boolean;
  if (currentScreen === 'Summary') {
    backgroundColor = 'rgb(16 46 73)';
    buttonsColor = '#fff';
    isSummaryScreen = true;
  } else {
    backgroundColor = '#fff';
    buttonsColor = '#000';
    isSummaryScreen = false;
  }
  const buttons = [
    {content: 'Cancel', color: 'blue'},
    {content: 'Articles In Carton', color: buttonsColor},
    {content: 'Confirm', color: 'blue'},
  ];
  return (
    <StyledViewComp
      padding="20px"
      width="100%"
      backgroundColor={backgroundColor}>
      <StyledViewComp flexDirection="row" justifyContent="space-between">
        <StyledViewComp
          alignSelf={'flex-start'}
          height={'60px'}
          flexDirection={'row'}
          alignItems={'center'}>
          <Bluetooth height={'60px'} width={'40px'} fill={buttonsColor} />
          <StyledTextComp fontSize={'20px'} color={buttonsColor}>
            100%
          </StyledTextComp>
        </StyledViewComp>
        <Radio height={'60px'} width={'80px'} fill={buttonsColor} />
        <Cloud height={'60px'} width={'70px'} fill={buttonsColor} />
      </StyledViewComp>
      <StyledViewComp
        flexDirection={'row'}
        justifyContent={isSummaryScreen ? 'center' : 'space-between'}
        marginTop={'10px'}>
        {buttons.map((buttonOptions, index) => {
          const {content, color} = buttonOptions;
          const isButtonsVisible = index === 1 || !isSummaryScreen;
          if (isButtonsVisible) {
            return (
              <StyledTextComp
                key={content}
                color={color}
                fontSize={'18px'}
                fontWeight={'500'}>
                {content}
              </StyledTextComp>
            );
          }
        })}
      </StyledViewComp>
    </StyledViewComp>
  );
};
