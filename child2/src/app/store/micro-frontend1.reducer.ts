import { createReducer, on } from '@ngrx/store';
import { setData } from './micro-frontend1.action';

export const initialState: any = { data: null };

export const appReducer = createReducer(
  initialState,
  on(setData, (state, action ) => {return { ...state, data: action.data }}),
);