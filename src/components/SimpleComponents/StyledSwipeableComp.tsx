import React, {FC, ReactNode} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {DeleteItemPanel} from '../ArticlesList/DeleteItemPanel';

type Props = {
  articleCode: string;
  handleDeleteArticle: () => void;
  children?: ReactNode;
};
export const StyledSwipeableComp: FC<Props> = props => {
  const {handleDeleteArticle} = props;
  const rightSwipe = () => {
    return <DeleteItemPanel handleDeleteArticle={handleDeleteArticle} />;
  };
  return (
    <Swipeable {...props} renderRightActions={rightSwipe}>
      {props.children}
    </Swipeable>
  );
};
