import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { DispatchActionTypes } from './types';

export const searchUpdate = (value: string) => ({
    
});

export const updateStatus = (status: string) => ({

});

export const getTodos = (title?: string, status?: string): ThunkAction<
    void,
    RootState,
    undefined,
    any
> => (dispatch: Dispatch<DispatchActionTypes>) => {

};

export const filterBySearch = (value: string) => {

};

export const filterByStatus = (status: string) => {

};


