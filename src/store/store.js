



// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { configureStore } from "@reduxjs/toolkit";
import counterReducerData from '../slice/counterSlice'

// export default store;

export const store = configureStore({
    reducer: {
      counter: counterReducerData
    }
  })

  export default store;