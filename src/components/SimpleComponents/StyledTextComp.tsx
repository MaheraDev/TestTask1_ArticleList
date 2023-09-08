import styled from 'styled-components/native';
import {Text} from 'react-native';
import React, {ReactNode} from 'react';

type Prop = string | undefined;

type Props = {
  color?: Prop;
  fontSize?: Prop;
  fontWeight?: Prop;
  backgroundColor?: Prop;
  margin?: Prop;
  overflow?: Prop;
  borderRadius?: Prop;
  width?: Prop;
  alignItems?: Prop;
  alignSelf?: Prop;
  justifyContent?: Prop;
  letterSpacing?: Prop;
  children?: ReactNode;
};

const StyledButton = styled(Text)<Props>`
  ${({width}) => width && `width: ${width}`};
  ${({fontSize}) => fontSize && `fontSize: ${fontSize}`};
  ${({letterSpacing}) => letterSpacing && `letterSpacing: ${letterSpacing}`};
  ${({fontWeight}) => fontWeight && `fontWeight: ${fontWeight}`};
  ${({borderRadius}) => borderRadius && `borderRadius: ${borderRadius}`};
  ${({overflow}) => overflow && `overflow: ${overflow}`};
  ${({margin}) => margin && `margin: ${margin}`};
  ${({justifyContent}) =>
    justifyContent && `justifyContent: ${justifyContent}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({color}) => color && `color: ${color}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
`;

export const StyledTextComp = (props: Props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
