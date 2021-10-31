import { put } from 'redux-saga/effects';
import {
  getTransactionRequest,
  getTransactionSuccess,
  getTransactionError,
} from './../actions/actionCreator';
import * as API from './../api/transactionAPI';

export function * getTransactionSaga () {
  yield put(getTransactionRequest());

  try {
    const { data: transactionData } = yield API.getTransactions();

    yield put(getTransactionSuccess(transactionData));
  } catch (error) {
    yield put(getTransactionError(error));
  }
}
