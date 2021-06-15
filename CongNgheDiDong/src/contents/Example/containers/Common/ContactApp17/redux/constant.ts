import { fromJS } from 'immutable';
import { createArrayInitialState } from '@utils/redux';

/**
 * NAME
 */
export const PARENT_NAME = '';
export const NAME = 'contact';

export const LIST = 'list';
export const DETAIL = 'detail';

/**
 * TYPE
 */
export type TList = {
  contactGetList: (state: any, action: any) => any;
  contactGetListSuccess: (state: any, action: any) => any;
  contactGetListFail: (state: any, action: any) => any;
};
export type TSetList = {
  contactSetList: (state: any, action: any) => any;
  contactSetListSuccess: (state: any, action: any) => any;
  contactSetListFail: (state: any, action: any) => any;
};

/**
 * INITIAL_STATE
 */
export const INITIAL_STATE = fromJS({
  ...createArrayInitialState(LIST),
});
