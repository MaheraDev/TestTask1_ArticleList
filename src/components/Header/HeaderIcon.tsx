import React, {FC} from 'react';
import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  icon: ImageSourcePropType;
};
export const HeaderIcon: FC<Props> = ({icon}) => {
  return <Image style={{width: 80, height: 60}} source={icon} />;
};
