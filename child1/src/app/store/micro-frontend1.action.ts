import { createAction, props } from '@ngrx/store';

export const setData = createAction(
  'microfrontend1 Set Data',
  props<{ data: any }>()
);