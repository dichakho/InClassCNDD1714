import { fromJS } from 'immutable';
import {
  createArrayInitialState,
  createObjectInitialState,
} from '@utils/redux';

/**
 * NAME
 */
export const PARENT_NAME = '';
export const NAME = 'dog';

export const LIST = 'list';
export const DETAIL = 'detail';

/**
 * TYPE
 */
export type TList = {
  dogGetList: (state: any, action: any) => any;
  dogGetListSuccess: (state: any, action: any) => any;
  dogGetListFail: (state: any, action: any) => any;
};
export type TDetail = {
  dogGetDetail: (state: any, action: any) => any;
  dogGetDetailSuccess: (state: any, action: any) => any;
  dogGetDetailFail: (state: any, action: any) => any;
};

/**
 * INITIAL_STATE
 */
export const INITIAL_STATE = fromJS({
  ...createArrayInitialState(LIST),
  ...createObjectInitialState(DETAIL),
});
