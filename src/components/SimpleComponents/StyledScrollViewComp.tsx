import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  flex?: string;
  padding?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignSelf?: string;
  alignItems?: string;
  backgroundColor?: string;
  children?: ReactNode;
};

const StyledScrollView = styled(ScrollView)<Props>`
  ${({flex}) => flex && `flex: ${flex}`};
  ${({width}) => width && `width: ${width}`};
  ${({padding}) => padding && `padding: ${padding}`};
  ${({height}) => height && `height: ${height}`};
  ${({marginTop}) => marginTop && `margin-top: ${marginTop}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
`;

export const StyledScrollViewComp = (props: Props) => (
  <StyledScrollView {...props}>{props.children}</StyledScrollView>
);
