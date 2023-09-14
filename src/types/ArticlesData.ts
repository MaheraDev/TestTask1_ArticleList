import {ImageSourcePropType} from 'react-native';

export interface ArticleData {
  image: ImageSourcePropType;
  code: string;
  color: string;
  size: string;
  title: string;
  amount: number;
  id: number;
}
