import { call, put, takeLatest } from "redux-saga/effects";

const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};


function* handleGetUsers() {
    try {
     // console.log(call(fetchGetUsers))
      const users = yield call(fetchGetUsers);
  
  
     console.log(users)
      yield put({ type: "GET_USERS_SUCCESS", payload: users });
    } catch (err) {
      yield put({ type: "GET_USERS_FAILED", payload: err });
    }
  }


export function* watcherUserSaga() {
    yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  }
