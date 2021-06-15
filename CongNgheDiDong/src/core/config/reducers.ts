import { combineReducers } from 'redux';
import config from '@contents/Config/redux/slice';
import auth from '@contents/Auth/redux/reducer';
import product from '@contents/Example/containers/Common/FlatList/redux/slice';
import contact from '@contents/Example/containers/Common/ContactApp17/redux/slice';
import dog from '@contents/Example/containers/Common/DogApp/redux/slice';
import { Global } from '@utils/appHelper';
import _ from 'lodash';

const appReducers = combineReducers({
  config,
  auth,
  product,
  contact,
  dog,
});

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_REDUX') {
    // eslint-disable-next-line no-console
    console.log('RESET_REDUX Called');
    Global.token = '';
    // state = undefined;
    state = _.pick(state, ['config']);
  }
  return appReducers(state, action);
};

export default rootReducer;
