import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { registerSaga, loginSaga } from './authSagas';
import {
  privateSaga,
  updateUserData,
  notAuthorizeSaga,
  headerRequest,
} from './userSaga';
import { paymentSaga, cashoutSaga } from './paymentSaga';
import {
  activeContestsSaga,
  customerContestsSaga,
  updateContestSaga,
  dataForContestSaga,
  getContestByIdSaga,
  downloadContestFileSaga,
} from './contestsSagas';
import { changeMarkSaga, setOfferStatusSaga, addOfferSaga } from './offerSagas';
import {
  previewSaga,
  getDialog,
  sendMessage,
  changeChatFavorite,
  changeChatBlock,
  getCatalogListSaga,
  addChatToCatalog,
  createCatalog,
  deleteCatalog,
  removeChatFromCatalogSaga,
  changeCatalogName,
} from './chatSagas';
import { getTransactionSaga } from './transactionSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.AUTH_ACTION_REGISTER, registerSaga);
  yield takeLatest(ACTION_TYPES.AUTH_ACTION_LOGIN, loginSaga);
  yield takeLatest(ACTION_TYPES.PAYMENT_ACTION, paymentSaga);
  yield takeEvery(ACTION_TYPES.GET_USER_ACTION, privateSaga);
  yield takeEvery(ACTION_TYPES.GET_DATA_FOR_CONTEST_ACTION, dataForContestSaga);
  yield takeLatest(ACTION_TYPES.CASHOUT_ACTION, cashoutSaga);
  yield takeLeading(
    ACTION_TYPES.GET_CONTESTS_FOR_CUSTOMER,
    customerContestsSaga
  );
  yield takeLatest(ACTION_TYPES.GET_CONTEST_BY_ID_ACTION, getContestByIdSaga);
  yield takeEvery(ACTION_TYPES.GET_CONTESTS_FOR_CREATIVE, activeContestsSaga);
  yield takeLatest(
    ACTION_TYPES.DOWNLOAD_CONTEST_FILE_ACTION,
    downloadContestFileSaga
  );
  yield takeLatest(ACTION_TYPES.UPDATE_CONTEST_ACTION, updateContestSaga);
  yield takeEvery(ACTION_TYPES.SET_OFFER_ACTION, addOfferSaga);
  yield takeLatest(ACTION_TYPES.SET_OFFER_STATUS_ACTION, setOfferStatusSaga);
  yield takeLatest(ACTION_TYPES.CHANGE_MARK_ACTION, changeMarkSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_USER_DATA, updateUserData);
  yield takeLatest(ACTION_TYPES.ONLY_FOR_NOT_AUTHORIZE_USERS, notAuthorizeSaga);
  yield takeLatest(ACTION_TYPES.HEADER_REQUEST_AUTHORIZE, headerRequest);
  yield takeLatest(ACTION_TYPES.GET_PREVIEW_CHAT_ASYNC, previewSaga);
  yield takeLatest(ACTION_TYPES.GET_DIALOG_MESSAGES_ASYNC, getDialog);
  yield takeLatest(ACTION_TYPES.SEND_MESSAGE_ACTION, sendMessage);
  yield takeLatest(ACTION_TYPES.SET_CHAT_FAVORITE_FLAG, changeChatFavorite);
  yield takeLatest(ACTION_TYPES.SET_CHAT_BLOCK_FLAG, changeChatBlock);
  yield takeLatest(ACTION_TYPES.GET_CATALOG_LIST_ASYNC, getCatalogListSaga);
  yield takeLatest(ACTION_TYPES.ADD_CHAT_TO_CATALOG_ASYNC, addChatToCatalog);
  yield takeLatest(ACTION_TYPES.CREATE_CATALOG_REQUEST, createCatalog);
  yield takeLatest(ACTION_TYPES.DELETE_CATALOG_REQUEST, deleteCatalog);
  yield takeLatest(
    ACTION_TYPES.REMOVE_CHAT_FROM_CATALOG_REQUEST,
    removeChatFromCatalogSaga
  );
  yield takeLatest(ACTION_TYPES.CHANGE_CATALOG_NAME_REQUEST, changeCatalogName);

  // TRANSACTIONS
  yield takeLatest(ACTION_TYPES.GET_TRANSACTION_ACTION, getTransactionSaga);
}

export default rootSaga;
