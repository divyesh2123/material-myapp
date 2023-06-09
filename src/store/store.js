// import { createStore ,applyMiddleware} from "redux";
// import rootReducer  from '../reducer/index'
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from "../saga";

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(rootReducer,
//   applyMiddleware(sagaMiddleware));

//   sagaMiddleware.run(rootSaga);



 import { configureStore } from "@reduxjs/toolkit";
 import counterReducerData from '../slice/counterSlice';
 import userReducerData from '../slice/userSlice.js';

/// export default store;

export const store = configureStore({
   reducer: {
counter: counterReducerData,
user:  userReducerData
   }
 })

  export default store;