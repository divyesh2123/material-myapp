import { delay, put, takeEvery, takeLatest}  from 'redux-saga/effects'
import { first } from '../action/counterAction';

function* incrementAsync()
{

    yield delay(2000);

    yield put(first())

}


export function* watchIncrement()
{

    yield  takeLatest('INC_AYNC',incrementAsync)

}