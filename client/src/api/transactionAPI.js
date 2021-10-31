import axios from 'axios';
import CONSTANTS from '../constants';

const axiosSets = {
  baseUrl: CONSTANTS.BASE_URL,
};

const apiInstance = axios.create(axiosSets);

const transactionData = [
  { id: 1, date: '2021-08-31', operationType: 'INCOME', amount: 10 },
  { id: 2, date: '2021-09-01', operationType: 'INCOME', amount: 20 },
  { id: 3, date: '2021-09-04', operationType: 'EXPENCE', amount: 40 },
  { id: 4, date: '2021-09-11', operationType: 'INCOME', amount: 1150 },
  { id: 5, date: '2021-09-22', operationType: 'INCOME', amount: 230 },
];

// export const getTransactions = () => apiInstance.get('/transactions');

export const getTransactions = async () => await { data: transactionData };
