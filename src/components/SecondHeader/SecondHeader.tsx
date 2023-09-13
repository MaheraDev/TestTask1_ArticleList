import React from 'react';
import {SecHeadItem} from './SecHeadItem';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {ListSelectionButton} from '../UIComponents/ListSelectionButton';
import {useNavigation} from '@react-navigation/native';

const textContent = {
  barcode: '25003900020001902003',
  quantity: '9',
};

export const SecondHeader = () => {
  const navigation = useNavigation();
  const navigateToArticles = () => {
    navigation.navigate('Articles');
  };

  const navigateToCartons = () => {
    navigation.navigate('Cartons');
  };

  // const route = useRoute();

  // const isOnArticlesScreen = route.name === 'Articles';
  // const isOnCartonsScreen = route.name === 'Cartons';

  return (
    <StyledViewComp>
      <StyledViewComp
        padding={'10px 5px'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        backgroundColor={'#ddd'}>
        <SecHeadItem textContent={textContent.barcode} />
        <SecHeadItem textContent={textContent.quantity} />
      </StyledViewComp>
      <StyledViewComp flexDirection={'row'} backgroundColor={'#ddd'}>
        <ListSelectionButton
          // backgroundColor={isOnCartonsScreen ? '#fff' : '#ddd'}
          textContent={'Cartons'}
          onPress={() => navigateToCartons()}
        />
        <ListSelectionButton
          // backgroundColor={isOnArticlesScreen ? '#fff' : '#ddd'}
          textContent={'Articles'}
          onPress={() => navigateToArticles()}
        />
      </StyledViewComp>
    </StyledViewComp>
  );
};
