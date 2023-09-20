import styled from 'styled-components/native';
import {Text} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  color?: string;
  position?: string;
  top?: string;
  right?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  overflow?: string;
  borderRadius?: string;
  width?: string;
  alignItems?: string;
  alignSelf?: string;
  textAlign?: string;
  justifyContent?: string;
  letterSpacing?: string;
  borderWidth?: string;
  children?: ReactNode;
};

const StyledButton = styled(Text)<Props>`
  ${({width}) => width && `width: ${width}`};
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({right}) => right && `right: ${right}`};
  ${({fontSize}) => fontSize && `fontSize: ${fontSize}`};
  ${({letterSpacing}) => letterSpacing && `letterSpacing: ${letterSpacing}`};
  ${({fontWeight}) => fontWeight && `fontWeight: ${fontWeight}`};
  ${({borderRadius}) => borderRadius && `borderRadius: ${borderRadius}`};
  ${({borderWidth}) => borderWidth && `borderWidth: ${borderWidth}`};
  ${({overflow}) => overflow && `overflow: ${overflow}`};
  ${({margin}) => margin && `margin: ${margin}`};
  ${({padding}) => padding && `padding: ${padding}`};
  ${({justifyContent}) =>
    justifyContent && `justifyContent: ${justifyContent}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({textAlign}) => textAlign && `textAlign: ${textAlign}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({color}) => color && `color: ${color}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
`;

export const StyledTextComp = (props: Props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
