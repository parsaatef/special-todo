import { 
    combineReducers 
} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todo/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todoReducer']
}

const rootReducer = combineReducers({ 
    todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);