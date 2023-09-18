import {CartonsData} from '../types/CartonsData';
import {calculateCartonsAmount} from '../helpers';
import {InitialArticlesList} from './InitialArticlesList';

export let InitialCartonsList: CartonsData[] = [
  // {
  //   barcode: '2500390002001902003',
  //   amount: 0,
  //   id: 1,
  // },
  {
    barcode: '2500390002001902004',
    amount: 0,
    id: 2,
  },
  {
    barcode: '2500390002001902005',
    amount: 0,
    id: 3,
  },
];
InitialCartonsList = calculateCartonsAmount(
  InitialCartonsList,
  InitialArticlesList,
);
