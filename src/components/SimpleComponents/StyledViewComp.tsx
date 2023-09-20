import styled from 'styled-components/native';
import {View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  flex?: string;
  gap?: string;
  position?: string;
  bottom?: string;
  left?: string;
  right?: string;
  padding?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignSelf?: string;
  alignItems?: string;
  backgroundColor?: string;
  borderWidth?: string;
  borderBottomWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: ReactNode;
};

const StyledView = styled(View)<Props>`
  ${({flex}) => flex && `flex: ${flex}`};
  ${({gap}) => gap && `gap: ${gap}`};
  ${({width}) => width && `width: ${width}`};
  ${({padding}) => padding && `padding: ${padding}`};
  ${({borderWidth}) => borderWidth && `borderWidth: ${borderWidth}`};
  ${({position}) => position && `position: ${position}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
  ${({height}) => height && `height: ${height}`};
  ${({marginTop}) => marginTop && `margin-top: ${marginTop}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({borderBottomWidth}) =>
    borderBottomWidth && `borderBottomWidth: ${borderBottomWidth}`};
  ${({borderRadius}) => borderRadius && `borderRadius: ${borderRadius}`};
  ${({borderColor}) => borderColor && `borderColor: ${borderColor}`};
`;

export const StyledViewComp = (props: Props) => (
  <StyledView {...props}>{props.children}</StyledView>
);
