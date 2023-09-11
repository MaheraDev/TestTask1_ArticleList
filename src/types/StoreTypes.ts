import {rootReducer} from '../redux/rootReducer';
import {store} from '../redux/store';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
