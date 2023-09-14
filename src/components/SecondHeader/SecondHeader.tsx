import React from 'react';
import {SecHeadItem} from './SecHeadItem';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {ListSelectionButton} from '../UIComponents/ListSelectionButton';
import {useNavigation} from '@react-navigation/native';

const textContent = {
  barcode: '25003900020001902003',
  quantity: '9',
};

type Props = {
  currentScreen: string;
};

export const SecondHeader: React.FC<Props> = ({currentScreen}) => {
  const navigation = useNavigation();
  const navigateToArticles = () => {
    navigation.navigate('Articles');
  };

  const navigateToCartons = () => {
    navigation.navigate('Cartons');
  };

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
          textContent={'Cartons'}
          onPress={navigateToCartons}
          backgroundColor={currentScreen === 'Cartons' ? '#fff' : '#ddd'}
        />
        <ListSelectionButton
          textContent={'Articles'}
          onPress={navigateToArticles}
          backgroundColor={currentScreen === 'Articles' ? '#fff' : '#ddd'}
        />
      </StyledViewComp>
    </StyledViewComp>
  );
};
