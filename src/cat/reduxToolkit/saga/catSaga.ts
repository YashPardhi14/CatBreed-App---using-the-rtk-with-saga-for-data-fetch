import { takeLatest, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getCatsSuccess } from '../../reduxToolkit/catReducer';

// const getAllCats = () => {
//   return axios.get('https://api.thecatapi.com/v1/breeds');
// };

async function fetchMyCatDetails(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get<any>(
      'https://api.thecatapi.com/v1/breeds'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
function* catSagaFetchWorker() {
  yield console.log('in worker1');
  const catDetails: AxiosResponse<any[]> = yield call(fetchMyCatDetails);

  yield console.log('in worker2');
  yield put(getCatsSuccess(catDetails));
}

function* catSagaWatcher() {
  yield console.log('in watcher');
  yield takeLatest('cats/getCatsFetch', catSagaFetchWorker);
}

export default catSagaWatcher;
