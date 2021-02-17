import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createStore, applyMiddleware, Store, Action } from 'redux';
import thunk from 'redux-thunk';
import { AppStore } from "redux/store";
import rootReducer, { RootState } from "../redux/reducer";

/**
 * Find test element by data-test attribute
 * @param wrapper 
 * @param testId
 * @returns  
 */
export const findTestEl = (wrapper: ShallowWrapper | ReactWrapper, testId: string) => {
    return wrapper.find(`[data-test="${testId}"]`);
};

/**
 * 
 * @param {*} initialState
 * @return store
 */
export const storeFactory = (initialState: RootState): AppStore => {
    /**
     * We should add middleware
     */
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};

export const todosMock = [
    {
        "id": 114,
        "title": "Hello test!",
        "completed": true
    },
    {
        "id": 123,
        "title": "Hi my todo!",
        "completed": false
    },
    {
        "id": 129,
        "title": "Hello my best friend!",
        "completed": false
    },
    {
        "id": 131,
        "title": "Hi best app!",
        "completed": false
    }
];