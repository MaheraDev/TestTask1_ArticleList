import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import React, {FC, ReactNode} from 'react';

type Props = {
  color?: string;
  flex?: string;
  onPress?: (event: any) => void;
  borderWidth?: string;
  backgroundColor?: string;
  overflow?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  margin?: string;
  height?: string;
  alignItems?: string;
  alignSelf?: string;
  justifyContent?: string;
  justifySelf?: string;
  borderColor?: string;
  position?: string;
  bottom?: string;
  right?: string;
  children?: ReactNode;
};

const StyledButton = styled(Pressable)<Props>`
  ${({height}) => height && `height: ${height}`};
  ${({width}) => width && `width: ${width}`};

  ${({padding}) => padding && `padding: ${padding}`};
  ${({margin}) => margin && `margin: ${margin}`};

  ${({borderWidth}) => borderWidth && `borderWidth: ${borderWidth}`};
  ${({borderRadius}) => borderRadius && `borderRadius: ${borderRadius}`};
  ${({borderColor}) => borderColor && `borderColor: ${borderColor}`};

  ${({overflow}) => overflow && `overflow: ${overflow}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({justifyContent}) =>
    justifyContent && `justifyContent: ${justifyContent}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({justifySelf}) => justifySelf && `justifySelf: ${justifySelf}`};
  ${({alignSelf}) => alignSelf && `alignSelf: ${alignSelf}`};
  ${({position}) => position && `position: ${position}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({right}) => right && `right: ${right}`};

  ${({color}) => color && `color: ${color}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
`;

export const StyledButtonComp: FC<Props> = ({children, onPress, ...rest}) => {
  let disabled = false;
  const callPress = () => {
    if (!disabled) {
      if (onPress) {
        onPress();
      }
      disabled = true;
    }
    setTimeout(() => {
      disabled = false;
    }, 500);
  };
  return (
    <StyledButton onPress={callPress} {...rest}>
      {children}
    </StyledButton>
  );
};
