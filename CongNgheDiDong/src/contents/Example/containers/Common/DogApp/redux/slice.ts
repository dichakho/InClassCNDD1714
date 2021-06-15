import { createSlice } from '@reduxjs/toolkit';
import { fromJS } from 'immutable';
import { INITIAL_STATE, NAME, LIST } from './constant';

const slice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    // ...createArrayReducer<TList>(`${NAME}GetList`, LIST),
    dogGetList: (state) => state.setIn([LIST, 'loading'], true).setIn([LIST, 'error'], null),
    dogGetListSuccess: (state, action) => state.setIn([LIST, 'data'], fromJS(action.payload)),
    dogGetListFail: (state, action) => state
      .setIn([LIST, 'loading'], false)
      .setIn([LIST, 'error'], action.payload.error),
  },
  // extraReducers: {
  //   [REHYDRATE]: (state, action) => {
  //     if (action.payload && action.payload.product) {
  //       const list = action.payload.product.get('list');
  //       return INITIAL_STATE.merge({
  //         list: INITIAL_STATE.get('list').merge({ data: list.get('data') }),
  //       });
  //     }
  //     return state;
  //   },
  // },
});

export const { dogGetList, dogGetListSuccess, dogGetListFail } = slice.actions;

export default slice.reducer;
