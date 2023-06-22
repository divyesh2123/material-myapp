import { all } from "redux-saga/effects";
import { watchIncrement } from "./counterSaga";
import { watcherUserSaga } from "./watcherUserSaga";

 

export default function* rootSaga()
{

    yield all([watchIncrement(),watcherUserSaga()])
}