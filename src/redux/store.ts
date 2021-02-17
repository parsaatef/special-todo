import { 
    createStore,
    applyMiddleware,
    Middleware,
    Store,
    Action,
    Dispatch,
    AnyAction
} from 'redux';
import reducer, { RootState } from './reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const logger: Middleware<any, RootState, Dispatch<AnyAction>> = 
store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    return result
};

export type AppStore = Store<RootState, Action> & {
    dispatch: any
};

const store: AppStore = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

const persistor = persistStore(store);

export { store, persistor };