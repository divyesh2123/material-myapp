import {getUserListFailure,getUserListSuccess,getUserListStarted} from '../action/myuseraction'

export const getUserList = (page = 1) => async dispatch => {
    dispatch(getUserListStarted());
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      dispatch(getUserListSuccess(data.data));
    } catch (err) {
      dispatch(getUserListFailure(err.message));
    }
  }