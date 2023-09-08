import {Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
type Props = {
  iconPath: ImageSourcePropType;
  textContent: string;
};
export const SecHeadItem: FC<Props> = ({iconPath, textContent}) => {
  return (
    <StyledViewComp alignItems="center" flexDirection="row">
      <Image source={iconPath} />
      <StyledTextComp fontSize="12px">{textContent}</StyledTextComp>
    </StyledViewComp>
  );
};
