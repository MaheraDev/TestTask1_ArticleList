import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import React, {FC, ReactNode} from 'react';

type Prop = string | undefined;

type Props = {
  color?: Prop;
  flex?: Prop;
  onPress?: () => void;
  borderWidth?: Prop;
  backgroundColor?: Prop;
  overflow?: Prop;
  borderRadius?: Prop;
  width?: Prop;
  padding?: Prop;
  height?: Prop;
  alignItems?: Prop;
  alignSelf?: Prop;
  justifyContent?: Prop;
  justifySelf?: Prop;
  borderColor?: Prop;
  position?: Prop;
  bottom?: Prop;
  children?: ReactNode;
};

const StyledButton = styled(Pressable)<Props>`
  ${({height}) => height && `height: ${height}`};
  ${({width}) => width && `width: ${width}`};

  ${({padding}) => padding && `padding: ${padding}`};

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
