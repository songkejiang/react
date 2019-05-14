import { takeEvery } from 'redux-saga/effects'

import { GETINITLIST } from './actionTypes'
function * getData() {
    console.log(1111)
}
function* mySaga() {
    yield takeEvery(GETINITLIST, getData);
  }

  export default mySaga;