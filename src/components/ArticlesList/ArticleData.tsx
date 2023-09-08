import { Images } from "../../images/images";
import { ImageSourcePropType } from "react-native";

export interface ArticleData {
  image: ImageSourcePropType;
  code: string;
  color: string;
  size: string;
  title: string;
}

export const data: ArticleData[] = [
  {
    image: Images.longsleeve,
    code: 'CG0934',
    color: 'White',
    size: 'XS',
    title: 'Longsleeve Women X',
  },
  {
    image: Images.longsleeve,
    code: 'AC8435',
    color: 'White',
    size: 'S',
    title: 'Longsleeve Women Y',
  },
  {
    image: Images.longsleeve,
    code: 'CG0935',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0936',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0937',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0938',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0939',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0940',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0941',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
  {
    image: Images.longsleeve,
    code: 'CG0942',
    color: 'White',
    size: 'XL',
    title: 'Longsleeve Women Z',
  },
];
