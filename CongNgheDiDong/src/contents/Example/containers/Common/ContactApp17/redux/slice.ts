import { createSlice } from '@reduxjs/toolkit';
import { createArrayReducer } from '@utils/redux';
import { REHYDRATE } from 'redux-persist';
import { fromJS } from 'immutable';
import {
  INITIAL_STATE, TList, NAME, LIST,
} from './constant';

const slice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    ...createArrayReducer<TList>(`${NAME}GetList`, LIST),
    setContactList: (state, action) => state.setIn([LIST, 'data'], fromJS(action.payload.list)),
  },
  extraReducers: {
    [REHYDRATE]: (state, action) => {
      if (action.payload && action.payload.contact) {
        const list = action.payload.contact.get('list');
        return INITIAL_STATE.merge({
          list: INITIAL_STATE.get('list').merge({ data: list.get('data') }),
        });
      }
      return state;
    },
  },
});

export const {
  contactGetList,
  contactGetListSuccess,
  contactGetListFail,
  setContactList,
} = slice.actions;

export default slice.reducer;
