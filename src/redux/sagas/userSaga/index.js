import { takeEvery, put, call} from "@redux-saga/core/effects";
import { startRequest, endRequest, moreLoadingPocke, successLoadingPocke } from "../../reducer/pockemons/pockemons";
import client from '../../../plugins/axios'


const request = e => {
  return call(client.get, e);
}

function* requestSaga() {
  const  { data }  = yield request('?limit=10');
  const pockeData = []
  for(let i = 0; i < data.results.length;i++){
    const { url } = data.results[i];
    const  response  =  yield call(client.get, url.split('pokemon')[1]);
    pockeData.push(response.data)
  }
  yield put(endRequest({
    count: data.count,
    results: pockeData
  }))
}

function* moreLoadSaga({payload}){
  const  { data }  = yield request(`?limit=10&offset=${payload}`);
  const pockeData = []
  for(let i = 0; i < data.results.length;i++){
    const { url } = data.results[i];
    const  response  =  yield call(client.get, url.split('pokemon')[1]);
    pockeData.push(response.data)
  };
  yield put(successLoadingPocke({
    count:payload,
    pockeData
  }))
}

export default function* watcherUser() {
  yield takeEvery(startRequest.type, requestSaga);
  yield takeEvery(moreLoadingPocke.type, moreLoadSaga);
}

