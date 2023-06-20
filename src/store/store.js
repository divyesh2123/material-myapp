import { createStore ,applyMiddleware} from "redux";
import rootReducer  from '../reducer/index'
import thunk from 'redux-thunk';



const store = createStore(rootReducer,
  applyMiddleware(thunk));

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducerData from '../slice/counterSlice'

// // export default store;

// export const store = configureStore({
//     reducer: {
//       counter: counterReducerData
//     }
//   })

  export default store;