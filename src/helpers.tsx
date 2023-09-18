import {CartonsData} from './types/CartonsData';
import {ArticleData} from './types/ArticlesData';

export const calculateCartonsAmount = (
  cartonsList: CartonsData[],
  articlesList: ArticleData[],
): CartonsData[] => {
  const updatedCartonsList = [...cartonsList];

  updatedCartonsList.forEach(carton => {
    carton.amount = articlesList.reduce(
      (total, article) =>
        article.cartonId === carton.id ? total + article.amount : total,
      0,
    );
  });

  return updatedCartonsList;
};
