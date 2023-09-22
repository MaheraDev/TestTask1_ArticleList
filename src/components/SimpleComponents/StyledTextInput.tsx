import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  name?: string;
  placeholder?: string;
  onChangeText?: any;
  onBlur?: any;
  errorData?: any;
  validate?: any;
  color?: string;
  fontSize?: string;
  flex?: string;
  fontWeight?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  overflow?: string;
  borderRadius?: string;
  width?: string;
  alignItems?: string;
  alignSelf?: string;
  justifyContent?: string;
  letterSpacing?: string;
  borderWidth?: string;
  borderBottomWidth?: string;
  borderBottomColor?: string;
  value?: string;
  secureTextEntry?: boolean;
  children?: ReactNode;
};

const TextInputWithProps = styled(TextInput)<Props>`
  ${({name}) => name && `name: ${name}`};
  ${({validate}) => validate && `validate: ${validate}`};
  ${({errorData}) => errorData && `errorData: ${errorData}`};
  ${({secureTextEntry}) =>
    secureTextEntry && `secureTextEntry: ${secureTextEntry}`};
  ${({placeholder}) => placeholder && `placeholder: ${placeholder}`};
  ${({width}) => width && `width: ${width}`};
  ${({fontSize}) => fontSize && `fontSize: ${fontSize}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({letterSpacing}) => letterSpacing && `letterSpacing: ${letterSpacing}`};
  ${({fontWeight}) => fontWeight && `fontWeight: ${fontWeight}`};
  ${({borderRadius}) => borderRadius && `borderRadius: ${borderRadius}`};
  ${({borderWidth}) => borderWidth && `borderWidth: ${borderWidth}`};
  ${({borderBottomWidth}) =>
    borderBottomWidth && `borderBottomWidth: ${borderBottomWidth}`};
  ${({borderBottomColor}) =>
    borderBottomColor && `borderBottomColor: ${borderBottomColor}`};
  ${({overflow}) => overflow && `overflow: ${overflow}`};
  ${({margin}) => margin && `margin: ${margin}`};
  ${({padding}) => padding && `padding: ${padding}`};
  ${({justifyContent}) =>
    justifyContent && `justifyContent: ${justifyContent}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({color}) => color && `color: ${color}`};
  ${({value}) => value && `value: ${value}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
`;

export const StyledTextInput: React.FC<Props> = ({
  onChangeText,
  children,
  ...rest
}) => (
  <TextInputWithProps {...rest} onChangeText={onChangeText}>
    {children}
  </TextInputWithProps>
);
