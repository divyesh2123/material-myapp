import { all } from "redux-saga/effects";
import { watchIncrement } from "./counterSaga";

 

export default function* rootSaga()
{

    yield all([watchIncrement()])
}