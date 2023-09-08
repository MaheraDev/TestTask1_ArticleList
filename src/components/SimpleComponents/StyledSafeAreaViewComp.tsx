import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';

type Prop = string | undefined;

type Props = {
  flex?: Prop;
  position?: Prop;
  bottom?: Prop;
  left?: Prop;
  right?: Prop;
  padding?: Prop;
  width?: Prop;
  height?: Prop;
  marginTop?: Prop;
  flexDirection?: Prop;
  justifyContent?: Prop;
  alignSelf?: Prop;
  alignItems?: Prop;
  backgroundColor?: Prop;
  children?: ReactNode;
};

const StyledSafeAreaView = styled(SafeAreaView)<Props>`
  ${({flex}) => flex && `flex: ${flex}`};
  ${({width}) => width && `width: ${width}`};
  ${({padding}) => padding && `padding: ${padding}`};
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
`;

export const StyledSafeAreaViewComp = (props: Props) => (
  <StyledSafeAreaView {...props}>{props.children}</StyledSafeAreaView>
);
