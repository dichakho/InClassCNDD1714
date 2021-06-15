import { put, call, takeLatest } from 'redux-saga/effects';
import { handleException } from '@utils/exception';
import { stringifyQuery } from '@utils/redux';
import { dogGetList, dogGetListSuccess, dogGetListFail } from './slice';
import { fetchDogs } from './api';

export function* getListSaga({ payload }: { payload: any }) {
  try {
    const response = yield call(fetchDogs, stringifyQuery(payload.query));
    yield put(dogGetListSuccess(response));
    return true;
  } catch (error) {
    yield put(dogGetListFail(yield* handleException(error)));
    return false;
  }
}

export default [takeLatest(dogGetList, getListSaga)];
