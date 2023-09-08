import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import React, {ReactNode} from 'react';

type Prop = string | undefined;

type Props = {
  color?: Prop;
  borderWidth?: Prop;
  backgroundColor?: Prop;
  overflow?: Prop;
  borderRadius?: Prop;
  width?: Prop;
  padding?: Prop;
  height?: Prop;
  alignItems?: Prop;
  justifyContent?: Prop;
  borderColor?: Prop;
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
  ${({justifyContent}) =>
    justifyContent && `justifyContent: ${justifyContent}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  
  ${({color}) => color && `color: ${color}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
`;

export const StyledButtonComp = (props: Props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
